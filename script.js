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
const phoneInput = document.getElementById("phone");

let currentUserIndex = null;
let users = JSON.parse(localStorage.getItem("users")) || [];


function createUser() {
  const name = nameInput.value.trim();
  const email = phoneInput.value.trim();
  let validUser = true;
  let id = 5;
  if (validUser) {
    const newUser = {
      name,
      email,
      id,
    };
    users.push(newUser);
    saveData();
  }
}

  
  function saveData() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  addBtn.addEventListener("click",function(){
    createUser();
    console.log(users);
  });
