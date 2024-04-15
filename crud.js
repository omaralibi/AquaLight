
const tableBody = document.getElementById("table-body");

let users = JSON.parse(localStorage.getItem("users")) || [];

function displayUser(user) {
  const tr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const phoneTd = document.createElement("td");
  const numberTd = document.createElement("td");
  const dateTd = document.createElement("td");
  const actionTd = document.createElement("td");

  nameTd.innerText = user.name;
  phoneTd.innerText = user.phone;
  numberTd.innerText = user.number;
  dateTd.innerText = user.date;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("data-name", user.name); 
  deleteBtn.addEventListener("click", deleteUser); 


  actionTd.appendChild(deleteBtn);

  tr.appendChild(nameTd);
  tr.appendChild(phoneTd);
  tr.appendChild(numberTd);
  tr.appendChild(dateTd);
  tr.appendChild(actionTd);

  tableBody.appendChild(tr);
}

function deleteUser(event) {
  const userName = event.target.getAttribute("data-name"); 
  
  users = users.filter(user => user.name !== userName); 
  saveData();
  tableBody.innerHTML = ""; 
  getUsers(); 
}
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsers() {
  tableBody.innerHTML = "";
  users.forEach((user) => {
      displayUser(user); 
  });
}

getUsers();

