// ===================================
// FRUTELLI GHANA
// WEBSITE FUNCTIONALITY
// Developed by Yaxo-Systems
// ===================================


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.textContent = isOpen ? "×" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM

const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener("submit", (event) => {

    event.preventDefault();


    // GET FORM INFORMATION

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const enquiry = document.getElementById("enquiry").value;

    const message = document.getElementById("message").value.trim();


    // VALIDATE FORM

    if (!name || !email || !message) {

        document.getElementById("form-note").textContent =
            "Please complete all required fields.";

        return;

    }


    // OFFICIAL FRUTELLI EMAIL
    // Replace this placeholder after confirmation.

    const recipient = "ADD-OFFICIAL-EMAIL-HERE";


    // DEMONSTRATION MODE

    if (recipient === "ADD-OFFICIAL-EMAIL-HERE") {

        document.getElementById("form-note").textContent =
            "The form is working in demo mode. Add Frutelli's approved email address in script.js to enable email submission.";

        return;

    }


    // PREPARE EMAIL

    const subject = encodeURIComponent(
        `Frutelli website enquiry: ${enquiry}`
    );

    const body = encodeURIComponent(

        `Name: ${name}

Email: ${email}

Enquiry: ${enquiry}

Message:

${message}`

    );


    // OPEN EMAIL APPLICATION

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

});
