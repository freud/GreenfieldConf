window.onload = () => {
    const speakerSwiper = new Swiper('#swiper-speakers', {
        speed: 400,
        loop: true,
        init: false,
        slidesPerPage: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletElement: 'button',
            clickable: true
        }
    });

    speakerSwiper.on('init', function() {
        speakerModal.init();
    });

    speakerSwiper.init();
}

