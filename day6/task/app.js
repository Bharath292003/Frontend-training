// Sample Array of Product objects
const products = [
    { id: 1, name: 'Screwdriver', category: 'Tools', price: 10.5, quantity: 150, dateAdded: new Date('2023-01-01') },
    { id: 2, name: 'Hammer', category: 'Tools', price: 12.75, quantity: 120, dateAdded: new Date('2023-02-15') },
    { id: 3, name: 'Wrench', category: 'Tools', price: 15.0, quantity: 200, dateAdded: new Date('2023-03-10') },
    { id: 4, name: 'Drill', category: 'Power Tools', price: 55.0, quantity: 80, dateAdded: new Date('2023-05-25') },
    { id: 5, name: 'Nail Gun', category: 'Power Tools', price: 90.0, quantity: 50, dateAdded: new Date('2023-06-30') },
    { id: 6, name: 'Saw', category: 'Tools', price: 20.0, quantity: 100, dateAdded: new Date('2023-04-20') },
    { id: 7, name: 'Laser Cutter', category: 'Machines', price: 500.0, quantity: 15, dateAdded: new Date('2023-07-15') },
    { id: 8, name: 'Band Saw', category: 'Machines', price: 250.0, quantity: 25, dateAdded: new Date('2023-08-05') }
  ];
  
  // 1. Sorting by Price (ascending) spread operator to create a new array 
  function SortedByPrice(){
    const sortedByPrice = [...productsArray].sort((a, b) => a.price - b.price);
    // console.log('Sorted by Price (Ascending):', sortedByPrice);
    return sortedByPrice;
  }
  // 2. Sorting by Quantity (descending)
  function SortedByQuantity(){
    const sortedByQuantity = [...productsArray].sort((a, b) => b.quantity - a.quantity);
    // console.log('Sorted by Quantity (Descending):', sortedByQuantity);
    return sortedByQuantity;

  }
  // 3. Sorting by Date Added (ascending)
  function sortedByDateAdded(){
        const sortedByDateAdded = [...productsArray].sort((a, b) => a.dateAdded - b.dateAdded);
        // console.log('Sorted by Date Added (Ascending):', sortedByDateAdded);  
        return sortedByDateAdded;
  }
  
  
  // 4. Search: Find all products in a specific category (e.g., 'Tools')
  function SearchCategory(Category){

    const toolsCategory = productsArray.filter(product => product.category === Category);
    // console.log('Products in Tools Category:', toolsCategory);
    return toolsCategory;
  }

  
  // 5. Search: Find products with price less than a certain value (e.g., 30)
  function affordableProducts(Price){
    const affordableProducts = productsArray.filter(product => product.price < Price);
    // console.log('Affordable Products (Price < 30):', affordableProducts);
    return affordableProducts;
  }
  
  // 6. Search: Find product by name (e.g., 'Hammer')
  function SearchProductName(ProductName){
    const hammerProduct = productsArray.filter(product => product.name === ProductName);
    // console.log('Product with name "Hammer":', hammerProduct);
    return hammerProduct;
  }
  
  // 7. Search: Find products with quantity greater than a certain value (e.g., 100)
  function SearchQuantityProducts(Quantity){
    const highQuantityProducts = productsArray.filter(product => product.quantity > Quantity);
    // console.log('Products with Quantity > 100:', highQuantityProducts);
    return highQuantityProducts;
  }

//   function powerToolsUnder100(){
//     const powerToolsUnder100 = products.filter(product => product.category === 'Power Tools' && product.price < 100);
//     console.log('Power Tools under 100:', powerToolsUnder100);
//   }
  
function Search(){
    let criteria = document.getElementById("Criteria");
    let category = document.getElementById("category");
    let price = document.getElementById("price");
    let name = document.getElementById("name");
    let quantity = document.getElementById("quantity");

    if (!criteria.value) {
        console.log("No search results");
        return [];
    }

    if(category.checked){
        return SearchCategory(criteria.value);
    }else if(price.checked){
        return affordableProducts(parseFloat(criteria.value));
    }else if(name.checked){
        return SearchProductName(criteria.value);
    }else if(quantity.checked){
        return SearchQuantityProducts(parseFloat(criteria.value));
    }else{
        return console.log("no search results");
    }
}


// document.addEventListener("DOMContentLoaded", ()=>{
//     // let input = document.getElementById("criteria");
  
//     let result = document.getElementById("result1");
//     btn.addEventListener("click",()=>{
//         let search = Search();
//         //  result.textContent = search.length ? display(search) : "No search results";
//         if(search.length != 0){
//             display(search);
//         }else{
//             result.textContent = "No search results"
//         }
//     })
// })


function Sort(){
    let dropdown = document.getElementById("dropdown");
    if(dropdown.value == "Price"){
        return SortedByPrice();
    }else if(dropdown.value == "dataAdded"){
        return sortedByDateAdded();
    }else if(dropdown.value == "quantity"){
        return SortedByQuantity();
    }else{
        return [];
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let result = document.getElementById("result1");

    btn1.addEventListener("click",()=>{
        // console.log(2);
        let search = Search();
        //  result.textContent = search.length ? display(search) : "No search results";
        if(search.length != 0){
            display(search);
        }else{
            result.textContent = "No search results"
        }
    })
    btn2.addEventListener("click",()=>{
        console.log(3);
        let sort = Sort();
        if(sort.length != 0){
            display(sort);
        }else{
            result.textContent = "No sort results"
        }
        //  result.textContent = sort.length ? display(sort) : "No sort results";
        
    })
})

function display(results){
    let list = document.getElementById("result1");
    list.innerHTML = " ";
    results.forEach(product=>{
        const listItem = document.createElement('li');
        listItem.textContent = (`${product.id} - ${product.name} - ${product.category} - ${product.quantity} - ${product.price} - ${product.dateAdded}` );
        list.appendChild(listItem);
      })

}

