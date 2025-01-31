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
const scriptURL = "https://script.google.com/macros/s/AKfycbw9Ixovlx_AiMhqz3wgn47lxOf3F5aD-voQ1xiFlZOb8MkB4a18kJPnpEt13h9vcJEq/exec";

const form = document.getElementById("contactForm"); // Use ID to select form

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Form submission failed! Please try again.");
      }
      alert("Thank you! Your form is submitted successfully.");
      form.reset(); // Clear form fields after submission
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("Oops! Something went wrong. Please try again later.");
    });
});
