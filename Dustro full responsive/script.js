// script.js (optional)
// Add any JavaScript functionality here, such as animations, interactions, or data handling.

// Example: A simple animation to highlight stats on hover
const stats = document.querySelectorAll('.about-stats .stat');

stats.forEach(stat => {
    stat.addEventListener('mouseover', () => {
        stat.classList.add('highlight');
    });

    stat.addEventListener('mouseout', () => {
        stat.classList.remove('highlight');
    });
}); 






const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});