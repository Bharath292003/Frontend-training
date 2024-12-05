const EmployeeData = [
    {
        id: "500972",
        firstName: "Bharath",
        lastName: "G",
        dob: "2003-01-01",
        doj: "5555-05-05",
        grade: "M3"
    },
    {
        id: "500950",
        firstName: "Asfaq",
        lastName: "V",
        dob: "6666-06-06",
        doj: "7777-07-07",
        grade: "M2"
    },
    {
        id: "500951",
        firstName: "Adel",
        lastName: "M",
        dob: "8888-08-08",
        doj: "9999-09-09",
        grade: "M1"
    },
    {
        id: "500952",
        firstName: "Jasmine",
        lastName: "A",
        dob: "2003-01-02",
        doj: "2017-09-07",
        grade: "M3"
    },
    {
        id: "500953",
        firstName: "Sabarish",
        lastName: "S",
        dob: "2002-06-11",
        doj: "2018-07-09",
        grade: "M1"
    },
    {
        id: "500954",
        firstName: "Santosh",
        lastName: "K",
        dob: "2002-10-21",
        doj: "7777-07-07",
        grade: "M2"
    },
    {
        id: "500955",
        firstName: "Derish",
        lastName: "D",
        dob: "2002-02-08",
        doj: "2024-01-01",
        grade: "M1"
    }
];
window.onload = function () {
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
}
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0px';
});


closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});
function showAllData() {
    sessionStorage.setItem("filteredResults", JSON.stringify(EmployeeData)); // Store all data in sessionStorage
    window.location.href = "SearchResults.html"; // Redirect to SearchResults.html

}

function redirectToResults() {
    const employeeId = document.getElementById("employee-id").value.trim();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const dob = document.getElementById("dob").value;
    const doj = document.getElementById("doj").value;
    const grade = document.getElementById("grade").value;
    const field = document.getElementById("field");


    const filteredResults = EmployeeData.filter(employee => {
        return (
            (!employeeId || employee.id.toString() === employeeId) &&
            (!firstName || employee.firstName.toLowerCase().includes(firstName.toLowerCase())) &&
            (!lastName || employee.lastName.toLowerCase().includes(lastName.toLowerCase())) &&
            (!dob || employee.dob === dob) &&
            (!doj || employee.doj === doj) &&
            (!grade || employee.grade === grade)
        );
    });
    if (!employeeId && !firstName && !lastName && !dob && !doj && !grade) {
        return field.innerHTML = `*Atleast one field is required*`
    }
    sessionStorage.setItem("filteredResults", JSON.stringify(filteredResults));
    window.location.href = "SearchResults.html";

}
function SearchLogout() {
    document.getElementById("logoutModal").style.display = "flex";
}
function closeLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function confirmLogout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}