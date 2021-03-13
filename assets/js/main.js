let click = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlaces-header');

click.addEventListener('click', () => {
    enlaces.classList.toggle('click');
    
});