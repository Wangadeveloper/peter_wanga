document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Simple project animation on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });
    });
});
