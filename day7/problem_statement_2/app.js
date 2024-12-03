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

function DisplayAddedProducts() {
    const productslist = document.getElementById('productList');
    productslist.textContent = "";

    DisplayProductsArr.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price}`;
        productslist.appendChild(listItem);
    });
}

function getProductDetails() {
    const product = document.getElementById('dropdown').value;
    return ProductArray.find(p => p.name === product);
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

function formatProducts(products) {
    return products
        .map(product => `${product.price} ${product.name} `)
        .join(', ');
}

function displayOrders(Orders) {
    const orderslist = document.getElementById('orderList');
    orderslist.textContent = ""; // Clear the list before redisplaying

    Orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${order.id}. ${order.name} ordered ${formatProducts(order.listOfProducts)}
            <button class="delete-order" value="${order.id}">
                <i class="fa fa-trash"></i>
            </button>
        `;
        orderslist.appendChild(listItem);
    });

    // Event Delegation for Deleting Orders
    document.getElementById('orderList').addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            const button = e.target.parentElement; // Get the parent button
            const orderId = parseInt(button.value); // Access the value attribute
            deleteOrder(orderId);
        }
    });
}


function deleteOrder(orderId) {
    // Find the index of the order with the matching ID
    const orderIndex = Orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        Orders.splice(orderIndex, 1); // Remove the order
        displayOrders(Orders); // Refresh the order list
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
        DisplayProductsArr.push(getProductDetails());
        DisplayAddedProducts();
        currentTotalAmount();
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
    });
});
