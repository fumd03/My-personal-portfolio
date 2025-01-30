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
<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    // Create FormData and append Google Form entry IDs (replace these IDs with yours)
    var formData = new FormData();
    formData.append("entry.hj99tb2", document.getElementById("fullName").value); // Full Name
    formData.append("entry.hj99tb4", document.getElementById("email").value); // Email
    formData.append("entry.hj99tb6", document.getElementById("phoneNumber").value); // Phone Number
    formData.append("entry.hj99tb8", document.getElementById("subject").value); // Subject
    formData.append("entry.hj99tb10", document.getElementById("message").value); // Message

    // Send form data to Google Form
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/viewform?usp=header", {
        method: "POST",
        body: formData,
        mode: "no-cors" // Google Forms does not return a response
    }).then(() => {
        alert("Message sent successfully!"); // Show success message
        document.getElementById("contactForm").reset(); // Reset form fields
    }).catch(error => {
        alert("Error submitting the form. Please try again.");
    });
});
</script>







