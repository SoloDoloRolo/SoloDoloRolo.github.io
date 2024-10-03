// JS to show definitions or additional info on hover for strong elements
const strongWords = document.querySelectorAll('strong');

strongWords.forEach(word => {
    word.addEventListener('click', () => {
        alert('More info about ' + word.textContent + ' here.');
    });
});
