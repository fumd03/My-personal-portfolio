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
    event.preventDefault(); // Prevent default form submission

    // Google Form Submission URL (Must end with `/formResponse`)
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/formResponse";

    // Replace these entry values with your actual Google Form field IDs
    var formData = new URLSearchParams();
    formData.append("entry.hj99tb2", document.getElementById("fullName").value); // Full Name
    formData.append("entry.hj99tb4", document.getElementById("email").value); // Email
    formData.append("entry.hj99tb6", document.getElementById("phoneNumber").value); // Phone Number
    formData.append("entry.hj99tb8", document.getElementById("subject").value); // Subject
    formData.append("entry.hj99tb10", document.getElementById("message").value); // Message

    // Debugging: Log data before sending
    console.log("Sending Data:", formData.toString());

    // Send form data using fetch()
    fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Google doesn't send a response, but it will submit data
    }).then(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Reset form
    }).catch(error => {
        console.error("Error:", error);
        alert("Failed to send the message. Check the console.");
    });
});



