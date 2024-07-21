// JavaScript for smooth scrolling and active link highlighting
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll("nav ul li a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    }

    // Highlighting active link on scroll
    window.addEventListener("scroll", highlightActiveLink);

    function highlightActiveLink() {
        const scrollPosition = window.pageYOffset;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop - 60 <= scrollPosition && section.offsetTop + section.offsetHeight - 60 > scrollPosition) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
});

console.log("Portfolio Page Loaded");
