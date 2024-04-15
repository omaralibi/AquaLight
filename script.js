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
