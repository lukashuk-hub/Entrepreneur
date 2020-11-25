window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu_items'),
    menuItem = document.querySelectorAll('.menu_items'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})