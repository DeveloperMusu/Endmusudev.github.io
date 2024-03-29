document.addEventListener("DOMContentLoaded", function() {
    // Animate sections on scroll
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animate form on submit
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Add animation class
        contactForm.classList.add("submit-animation");

        // Simulate form submission
        setTimeout(function() {
            contactForm.submit();
        }, 1000); // Adjust timing as needed
    });
});
