document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    submitForm();
});

document.getElementById("reservationForm").addEventListener("reset", function() {
    document.getElementById("message").textContent = "";
});

function submitForm() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;

    if (name && phone && date) {
        document.querySelector("#message").classList.add('active');
        document.getElementById("message").textContent = "🗹 Reservation successful!";
        setTimeout(function() {
            document.querySelector("#message").classList.remove('active');
        }, 2000);

    } else {
        document.querySelector("#message").classList.add('active');
        document.getElementById("message").textContent = "⚠ Please fill in all fields.";
        setTimeout(function() {
            document.querySelector("#message").classList.remove('active');
        }, 2000);
    }
}










const addBtn = document.querySelector(".nnn");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("np");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("date");




let currentUserIndex = null;
let users = JSON.parse(localStorage.getItem("users")) || [];


function createUser() {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const number = numberInput.value.trim();
  const date = dateInput.value.trim();

  if (!name || !phone || !number || !date) {
      alert("All fields are required");
      return;
  }

  const newUser = {
      name,
      phone,
      number,
      date,
  };
  users.push(newUser);
  saveData();
  clearInputs(); // Clear input fields after creating user
}

function clearInputs() {
  nameInput.value = "";
  phoneInput.value = "";
  numberInput.value = "";
  dateInput.value = "";
}
  
  function saveData() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  addBtn.addEventListener("click",function(){
    createUser();
    console.log(users);
  });
