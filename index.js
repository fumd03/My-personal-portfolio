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

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};



 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting to the server
    
    // Collect form data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Google Form pre-filled URL with entry field IDs
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/viewform?usp=header";
    
    // Replace the following with your actual Google Form field entry IDs:
    googleFormURL += "&entry.hj99tb2=" + encodeURIComponent(fullName);
    googleFormURL += "&entry.hj99tb4=" + encodeURIComponent(email);
    googleFormURL += "&entry.hj99tb6=" + encodeURIComponent(phoneNumber);
    googleFormURL += "&entry.hj99tb8=" + encodeURIComponent(subject);
    googleFormURL += "&entry.hj99tb10=" + encodeURIComponent(message);
    
    // Redirect the user to the Google Form with pre-filled data
    window.location.href = googleFormURL;
  });








