let productsArray = [
    {id:1,ProductName:"laptop",price: 40000},
    {id:2,ProductName:"watch",price: 700},
    {id:3,ProductName:"pen",price: 10}

]

function addProduct(product){ 
    if(productsArray.find(pro => pro.id == product.id)){
        return false;
    }else{
        productsArray.push(product);
        return true;
    }
}
function addProductDetails(){
    let PId = document.getElementById("productId").value;
    let Pname = document.getElementById("productName").value;
    let Pprice = document.getElementById("productPrice").value;
    const product = {id: PId,ProductName: Pname,price:Pprice};
    return product;

}
function UpdateProduct(NewProduct) {
    let UpdateProduct = productsArray.find(pro => pro.id == NewProduct.id );
    if(UpdateProduct){
        UpdateProduct.ProductName = NewProduct.ProductName;
        UpdateProduct.price = NewProduct.price;
        return true;
    }else{
         return false;
        
    }

}
function ApplyDiscount(Percentage){
 
    let productnew = productsArray.map(p => {
    let updatedProduct = {...p};
    updatedProduct.price = (p.price*Percentage)/100;
    return updatedProduct;
});

   return productnew;
}
function viewProducts(){
    let list = document.getElementById("list-products");
    list.innerHTML = " ";
    productsArray.forEach(product=>{
        const listItem = document.createElement('li');
        listItem.textContent = (`${product.id} - ${product.ProductName} - ${product.price}` );
        list.appendChild(listItem);
      })

}
document.addEventListener("DOMContentLoaded" ,()=>{
    let addButton = document.getElementById("btn-add");
    let updateButton = document.getElementById("btn-update");
    let discountButton = document.getElementById("btn-discount");
    
    addButton.addEventListener("click",()=>{
        addProduct(addProductDetails());
        viewProducts();

    })

})
