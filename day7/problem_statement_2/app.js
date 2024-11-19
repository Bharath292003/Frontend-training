const ProductArray = [
    {id :1, name:"laptop",price:4000 },
    {id :2, name:"chair", price:2000},
    {id :3, name:"watch", price:500},
    {id :4, name:"charger",price:2000 },
    {id :5, name:"computer", price:9000},
    {id :6, name:"pen", price:20}
];
const Orders = [
    // {
    // // id:0, 
    // // name:"Andrew",
    // // contact:"Coimbatore", 
    // // listOfProducts:[{id :1, name:"Phone",price:2000 },{id :2, name:"Charger", price:200},], 
    // // totalAmount: 2200, 
    // }
];

let DisplayProductsArr = [];
let id = 0;
function displayProductsDropdown(){
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
function currentTotalAmount(){
    let amount = document.getElementById("total-amt");
    let sum = 0;
    DisplayProductsArr.forEach(product =>{
        sum = sum + product.price;
    })
    
    amount.textContent = sum;
}
function GenerateId(){
   return ++id;
}
function formatProducts(products) {
    console.log(products)
    return products
      .map(product => `${product.name} (${product.price})`)
      .join(', ');
  }
function displayOrders(Orders){
    const orderslist = document.getElementById('orderList');
    orderslist.textContent = ""; 
    console.log(Orders);
    Orders.forEach(order => { 
        
        const listItem = document.createElement('li'); 
        listItem.textContent = `(${order.id}) ${order.name} ordered ${formatProducts(order.listOfProducts)}`; 
        orderslist.appendChild(listItem); 
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    displayProductsDropdown();
    let addButton = document.getElementById("addProduct");
    addButton.addEventListener("click",()=>{
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

    })
    let orderButton = document.getElementById("orderProduct");
    orderButton.addEventListener("click",()=>{
        Orders.push({
            id: GenerateId(),
            name : document.getElementById("customerName").value.trim(),
            contact : document.getElementById("customerAddress").value.trim(),
            listOfProducts : DisplayProductsArr
        })
        displayOrders(Orders);
        DisplayProductsArr = [];
        // let result = document.getElementById("result");
        // result.textContent = "Thankyou for placing your order";
        
    })
})