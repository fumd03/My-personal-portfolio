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





  emailjs.init("H13nx6uesLmBKFzJa"); // Replace with your EmailJS Public Key

  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_2q55b2s", "template_mr34rkr", this)
      .then(response => {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset(); // Reset form after successful submission
      }, error => {
          alert("Failed to send message. Please try again.");
      });
  });

