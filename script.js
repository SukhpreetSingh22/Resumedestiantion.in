// script.js - Additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Form validation (basic)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate form submission for demo purposes
            alert('Your message has been sent!');

            // Optionally, you can submit the form using fetch or XMLHttpRequest
            // fetch(form.action, {
            //     method: 'POST',
            //     body: new FormData(form)
            // }).then(response => response.text())
            //   .then(result => console.log(result))
            //   .catch(error => console.error(error));
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Accordion functionality for FAQ
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.closest('.accordion-item');
            const accordionBody = accordionItem.querySelector('.accordion-body');

            if (accordionBody.style.display === 'block') {
                accordionBody.style.display = 'none';
            } else {
                document.querySelectorAll('.accordion-body').forEach(body => {
                    body.style.display = 'none';
                });
                accordionBody.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const aboutContent = document.getElementById('aboutContent');

    readMoreBtn.addEventListener('click', function() {
        if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
            aboutContent.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            aboutContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});