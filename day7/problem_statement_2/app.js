const ProductArray = [
    { id: 1, name: "laptop", price: 4000 },
    { id: 2, name: "chair", price: 2000 },
    { id: 3, name: "watch", price: 500 },
    { id: 4, name: "charger", price: 2000 },
    { id: 5, name: "computer", price: 9000 },
    { id: 6, name: "pen", price: 20 }
];
const Orders = [];

let DisplayProductsArr = [];
let id = 0;

function displayProductsDropdown() {
    const dropdown = document.getElementById('dropdown');
    ProductArray.forEach(product => {
        const listItem = document.createElement('option');
        listItem.textContent = product.name;
        listItem.value = product.name;
        dropdown.appendChild(listItem);
    });
}

function DisplayCartProducts() {
    const cartList = document.getElementById('cartList');
    cartList.textContent = "";

    DisplayProductsArr.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${product.name} - $${product.price} 
            <button class="increase-qty" data-index="${index}">+</button>
        `;
        cartList.appendChild(listItem);
    });
    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', (e) => {
            const productIndex = e.target.getAttribute('data-index');
            DisplayProductsArr[productIndex].price += ProductArray.find(p => p.name === DisplayProductsArr[productIndex].name).price;
            currentTotalAmount();
            DisplayCartProducts();
        });
    });
}

function currentTotalAmount() {
    let amount = document.getElementById("total-amt");
    let sum = 0;
    DisplayProductsArr.forEach(product => {
        sum += product.price;
    });
    amount.textContent = sum;
}

function GenerateId() {
    return ++id;
}

function displayOrders(Orders) {
    const orderslist = document.getElementById('orderList');
    orderslist.textContent = "";

    Orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
             ${order.name} ordered ${order.listOfProducts.map(product => `${product.price}$ ${product.name}`).join(', ')}
            <button class="delete-order" style="padding:0.4rem" value="${order.id}">
                <i class="fa fa-trash"></i>
            </button>
        `;
        orderslist.appendChild(listItem);
    });

    document.getElementById('orderList').addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            const button = e.target.parentElement;
            const orderId = parseInt(button.value);
            deleteOrder(orderId);
        }
    });
    orderslist.querySelectorAll('.delete-order').forEach(button => {
        button.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.value || e.target.parentElement.value);
            deleteOrder(orderId);
        });
    });
}

function deleteOrder(orderId) {
    console.log('hi');
    const orderIndex = Orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        Orders.splice(orderIndex, 1);
        displayOrders(Orders);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayProductsDropdown();

    document.getElementById("addProduct").addEventListener("click", () => {
        const customerName = document.getElementById("customerName").value.trim();
        const customerAddress = document.getElementById("customerAddress").value.trim();
        const errorMessage = document.getElementById("error-message");

        if (!customerName || !customerAddress) {
            errorMessage.textContent = "Please enter necessary fields.";
            return;
        }
        errorMessage.textContent = "";

        const selectedProduct = ProductArray.find(p => p.name === document.getElementById('dropdown').value);
        if (selectedProduct) {
            DisplayProductsArr.push({ ...selectedProduct });
            DisplayCartProducts();
            currentTotalAmount();
        }
    });

    document.getElementById("orderProduct").addEventListener("click", () => {
        const customerName = document.getElementById("customerName").value.trim();
        const customerAddress = document.getElementById("customerAddress").value.trim();

        if (!customerName || !customerAddress) return;

        Orders.push({
            id: GenerateId(),
            name: customerName,
            contact: customerAddress,
            listOfProducts: [...DisplayProductsArr]
        });
        displayOrders(Orders);
        DisplayProductsArr = [];
        DisplayCartProducts();
        currentTotalAmount();
    });
});
