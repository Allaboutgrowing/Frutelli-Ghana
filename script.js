/* =========================================
   FRUTELLI GHANA
   YAXO-SYSTEMS WEBSITE CONCEPT
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

  });


  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.setAttribute("aria-label", "Open navigation");

      menuToggle.textContent = "☰";

    });

  });

}


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

const enquiryForm = document.getElementById("enquiry-form");

const formNote = document.getElementById("form-note");


/*
  Replace this placeholder with Frutelli's
  approved official email address before launch.
*/

const recipient = "ADD-OFFICIAL-EMAIL-HERE";


if (enquiryForm) {

  enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const enquiry = document.getElementById("enquiry").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {

      formNote.textContent = "Please complete all required fields.";

      return;

    }


    if (!email.includes("@") || !email.includes(".")) {

      formNote.textContent = "Please enter a valid email address.";

      return;

    }


    if (recipient === "ADD-OFFICIAL-EMAIL-HERE") {

      formNote.textContent =
        "Thank you, " + name +
        ". The form is currently in demonstration mode. The official company email must be added before enquiries can be sent.";

      return;

    }


    const subject = encodeURIComponent(
      "Frutelli Website Enquiry - " + enquiry
    );

    const body = encodeURIComponent(

      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Enquiry type: " + enquiry + "\n\n" +
      "Message:\n" + message

    );


    const mailtoLink =
      "mailto:" + recipient +
      "?subject=" + subject +
      "&body=" + body;


    window.location.href = mailtoLink;

    formNote.textContent =
      "Your email application should open with your enquiry prepared.";

  });

}


/* =========================================
   SMOOTH SECTION NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* =========================================
   WEBSITE READY
========================================= */

console.log("Frutelli Ghana website loaded successfully.");
console.log("Designed as a concept by Yaxo-Systems.");
