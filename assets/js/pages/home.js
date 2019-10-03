window.onload = () => {
    // new Swiper('.swiper-container', {
    //     speed: 400,
    //     loop: true,
    //     slidesPerPage: 1,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         bulletElement: 'button',
    //         clickable: true
    //     }
    // });

    const firstSection = document.querySelector('.section:first-child');
    const sectionBottom =  firstSection.offsetTop + firstSection.clientHeight; 
    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= sectionBottom / 2) {
            firstSection.classList.add('scrolled')
        } else {
            firstSection.classList.remove('scrolled')
        }
    });
}