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

    // Google Form Submission URL (use `/formResponse`)
    var googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeOa2eyU0Na0xhPE67A7v9OSpZDY77tJPEogCS_nvosSyNg9A/formResponse";

    // Replace with your Google Form entry IDs (Check via Inspect > Network > formResponse)
    var entryFullName = "entry.hj99tb2";  // Replace with actual ID
    var entryEmail = "entry.hj99tb4";     // Replace with actual ID
    var entryPhone = "entry.hj99tb6";     // Replace with actual ID
    var entrySubject = "entry.hj99tb8";   // Replace with actual ID
    var entryMessage = "entry.hj99tb10";   // Replace with actual ID

    // Collect form data
    var formData = new FormData();
    formData.append(entryFullName, document.getElementById("fullName").value);
    formData.append(entryEmail, document.getElementById("email").value);
    formData.append(entryPhone, document.getElementById("phoneNumber").value);
    formData.append(entrySubject, document.getElementById("subject").value);
    formData.append(entryMessage, document.getElementById("message").value);

    // Submit data using an invisible iframe (avoids 405 error)
    var iframe = document.createElement("iframe");
    iframe.name = "hiddenFrame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    var form = document.createElement("form");
    form.action = googleFormURL;
    form.method = "POST";
    form.target = "hiddenFrame";

    // Append hidden inputs
    formData.forEach((value, key) => {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

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
