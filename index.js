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

    // Replace these with the actual entry IDs from Google Forms
    var entryFullName = "entry.hj99tb2";  // Replace with correct Google Form entry ID
    var entryEmail = "entry.hj99tb4";     // Replace with correct Google Form entry ID
    var entryPhone = "entry.hj99tb6";     // Replace with correct Google Form entry ID
    var entrySubject = "entry.hj99tb8";   // Replace with correct Google Form entry ID
    var entryMessage = "entry.hj99tb10";  // Replace with correct Google Form entry ID

    // Google Form Submission URL (Keep `/formResponse` at the end)
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/formResponse";

    // Create a hidden form and append it to the page
    var form = document.createElement("form");
    form.action = googleFormURL;
    form.method = "POST";
    form.target = "hiddenFrame"; // Prevents page redirection

    // Function to create hidden input fields
    function addHiddenInput(name, value) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
    }

    // Add form data
    addHiddenInput(entryFullName, document.getElementById("fullName").value);
    addHiddenInput(entryEmail, document.getElementById("email").value);
    addHiddenInput(entryPhone, document.getElementById("phoneNumber").value);
    addHiddenInput(entrySubject, document.getElementById("subject").value);
    addHiddenInput(entryMessage, document.getElementById("message").value);

    // Create a hidden iframe for submission
    var iframe = document.createElement("iframe");
    iframe.name = "hiddenFrame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Append form to the body and submit it
    document.body.appendChild(form);
    form.submit();

    // Show success message and reset form
    setTimeout(() => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
        document.body.removeChild(form);
        document.body.removeChild(iframe);
    }, 1000);
});

