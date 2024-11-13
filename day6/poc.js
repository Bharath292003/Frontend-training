document.addEventListener("DOMContentLoaded",()=>{
    let num = document.getElementById("num");               
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");
    const x  = document.getElementById("btn");
    x.addEventListener("click",()=>{
        
        result.textContent = num.value;
    });
    });   