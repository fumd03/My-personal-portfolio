let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offSet && top < offSet + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const scriptURL = "https://script.google.com/macros/s/AKfycbyBPzKvfGF4Bq9WSxz-f0kXrysCdelKvx7QkVeRPNpx0i66vh3W-WQaISeQCtOKVVIVNw/exec"; // Add your actual script URL

const form = document.forms["contact-form"]; // Corrected form selection

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      alert("Thank you! Your form is submitted successfully.");
    })
    .then(() => {
      window.location.reload(); // Reload after form submission
    })
    .catch((error) => console.error("Error!", error.message)); // Fixed syntax error
});


