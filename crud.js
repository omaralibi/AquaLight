
const tableBody = document.getElementById("table-body");

let users = JSON.parse(localStorage.getItem("users")) || [];

getUsers();

  function updateUser() {
    users[currentUserIndex].name = nameInput.value;
    users[currentUserIndex].phone = phoneInput.value;
    users[currentUserIndex].number = numberInput.value;
    users[currentUserIndex].date = dateInput.value;
    saveData();
  }

  function showUpdateUser(index) {
    currentUserIndex = index;
    nameInput.value = users[index].name;
    phoneInput.value = users[index].phone;
    numberInput.value = users[index].number;
    dateInput.value = users[index].date;
}
function deleteUser(index) {
  users.splice(index, 1);
  saveData();
  getUsers();
}

  
function getUsers() {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
      const tr = document.createElement("tr");
      const nameTd = document.createElement("td");
      const phoneTd = document.createElement("td");
      const numberTd = document.createElement("td");
      const dateTd = document.createElement("td");
      const actionTd = document.createElement("td"); 

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => deleteUser(index));

      dateTd.innerText = user.date;
      nameTd.innerText = user.name;
      phoneTd.innerText = user.phone;
      numberTd.innerText = user.number;
      actionTd.appendChild(editBtn);
      actionTd.appendChild(deleteBtn);

      tr.appendChild(phoneTd);
      tr.appendChild(nameTd);
      tr.appendChild(numberTd); 
      tr.appendChild(dateTd);
      tr.appendChild(actionTd);
      
      tableBody.appendChild(tr);
  });
}

