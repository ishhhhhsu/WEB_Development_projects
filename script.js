```javascript
// Simple contact form interaction

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}
```
