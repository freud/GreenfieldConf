window.onload = () => {
    const menu = document.querySelector('.navbar .wrapper');
    const navToggler = document.querySelector('.nav-toggler');

    navToggler.addEventListener('click', () => {
        menu.classList.toggle('show');
        navToggler.classList.toggle('active');
        document.body.classList.toggle('disable-scroll');
    });
};