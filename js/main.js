const menuButton = document.querySelector('.header-menu-btn');
const menuList = document.querySelector('.header-menu-list');
const bars = document.querySelectorAll('bar');



menuButton.addEventListener('click', () => {
    
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});