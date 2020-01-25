(function(){

    const nav = document.querySelector('.navbar');
    const menu = nav.querySelector('.wrapper');
    const navToggler = nav.querySelector('.nav-toggler');
    const scrollBtn = nav.querySelector('.scroll-trigger');
    let navHeight = nav.offsetHeight;
    let isOpen = false;

    addNavShadow();
    window.addEventListener('scroll', () => {
        addNavShadow();
        navHeight = nav.offsetHeight;
    });

    window.addEventListener('resize', () => {
        if(isOpen) {
            menu.style = '';
            toggleMenu();
        }
    });

    document.body.addEventListener('touchmove', e => {
        if(isOpen && e.cancelable) {
            e.preventDefault();
        }
    }, {passive: false});

    
    navToggler.addEventListener('click', () => {
        toggleMenu();
        Object.assign(menu.style, {
            top: `${navHeight}px`,
            height: `calc(100vh - ${navHeight}px)`,
            boxShadow: 'none'
        });
    });

    scrollBtn.addEventListener('click', () => {
        if(isOpen) {
            menu.style = '';
            toggleMenu();
        }
    });

    function addNavShadow() {
        const active = nav.classList.contains('navbar-shadow')
        if(window.pageYOffset > 45 && !active) {
            nav.classList.add('navbar-shadow');
        } else if (window.pageYOffset < 35 && active) {
            nav.classList.remove('navbar-shadow');
        }
    }

    function toggleMenu() {
        menu.classList.toggle('show');
        navToggler.classList.toggle('active');
        document.body.classList.toggle('disable-scroll');
        isOpen = !isOpen;
    }
})();