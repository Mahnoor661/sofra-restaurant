const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your reservation request has been received. We look forward to welcoming you at Sofra.");

    reservationForm.reset();
});

const dateInput = document.querySelector("#date");
const today = new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);


const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});