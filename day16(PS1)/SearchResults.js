
let filteredResults = JSON.parse(sessionStorage.getItem("filteredResults"));

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-250px";
});


window.onload = function () {
    renderTable(filteredResults);
};

function renderTable(data) {
    const tbody = document.querySelector(".results-table tbody");
    tbody.innerHTML = "";

    if (data.length > 0) {
        data.forEach((employee) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.dob}</td>
                <td>${employee.doj}</td>
                <td>${employee.grade}</td>
                <td>
                    <a href="#" onclick="openModifyModal('${employee.id}')" title="Modify">
                        <i class="fas fa-edit"></i>
                    </a>
                </td>
            `;
            tbody.appendChild(row);
        });
    } else {
        tbody.innerHTML = `<tr><td colspan="7">No results found</td></tr>`;
    }
}

function openModifyModal(employeeId) {
    const employee = findEmployeeById(employeeId);
    if (employee) {
        document.getElementById("employeeId").value = employee.id;
        document.getElementById("firstName").value = employee.firstName;
        document.getElementById("lastName").value = employee.lastName;
        document.getElementById("dob").value = employee.dob;
        document.getElementById("doj").value = employee.doj;
        document.getElementById("grade").value = employee.grade;
        document.getElementById("modifyModal").style.display = "block";
    }
}


function closeModifyModal() {
    document.getElementById("modifyModal").style.display = "none";
}


function findEmployeeById(employeeId) {
    return filteredResults.find((employee) => employee.id === employeeId);
}

function save(event) {
    event.preventDefault();

    const employeeId = document.getElementById("employeeId").value;
    const updatedEmployee = {
        id: employeeId,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        doj: document.getElementById("doj").value,
        grade: document.getElementById("grade").value,
    };


    const index = filteredResults.findIndex((employee) => employee.id === employeeId);
    if (index !== -1) {
        filteredResults[index] = updatedEmployee;
        sessionStorage.setItem("filteredResults", JSON.stringify(filteredResults));
        renderTable(filteredResults);
        closeModifyModal();
    }
    Toastify({
        text: "Data Updated Successfully!",
        duration: 2000,
        gravity: "top",
        position: "right",
        className: "toastify toastify-top-down",
        backgroundColor: "linear-gradient(to right, #28a745, #218838)",
    }).showToast();
}


function SearchResultLogout() {
    document.getElementById("logoutModal").style.display = "flex";
}
function CloseLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function ConfirmLogout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}