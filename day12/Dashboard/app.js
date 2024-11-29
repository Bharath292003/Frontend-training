
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const productBtn = document.getElementById('product-btn');
const orderBtn = document.getElementById('order-btn');


menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0px'; 
});


closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px'; 
});


productBtn.addEventListener('click', () => {
    navigateTo('/day1/Problem_Statement1/index.html'); t
});


orderBtn.addEventListener('click', () => {
    navigateTo('/day7/problem_statement_2/index.html'); 
});

function navigateTo(path) {
    window.location.href = path;
}
