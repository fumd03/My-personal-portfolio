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


<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var fullName = encodeURIComponent(document.getElementById("fullName").value);
    var email = encodeURIComponent(document.getElementById("email").value);
    var phoneNumber = encodeURIComponent(document.getElementById("phoneNumber").value);
    var subject = encodeURIComponent(document.getElementById("subject").value);
    var message = encodeURIComponent(document.getElementById("message").value);

    // Replace with actual Google Form entry IDs (Find these using Inspect > Network > Payload)
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/formResponse?";
    googleFormURL += "&entry.hj99tb2=" + fullName;
    googleFormURL += "&entry.hj99tb4=" + email;
    googleFormURL += "&entry.hj99tb6=" + phoneNumber;
    googleFormURL += "&entry.hj99tb8=" + subject;
    googleFormURL += "&entry.hj99tb10=" + message;

    // Submit form using GET request (Google Forms does not allow POST)
    fetch(googleFormURL, { method: "GET", mode: "no-cors" })
        .then(() => {
            alert("Message sent successfully!"); // Show success message
            document.getElementById("contactForm").reset(); // Reset form fields
        })
        .catch(error => {
            alert("Error submitting the form. Please try again.");
        });
});
</script>
