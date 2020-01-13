window.onload = () => {


    // Uncomment if there is more than one partner
    // createSwiper({
    //     selector: '#swiper-partners',
    //     props: {
    //         spaceBetween: 60
    //     }
    // });

    createSwiper({
        selector: '#swiper-speakers', 
        props: { init: false },
        initFunc: () => {
            speakerModal.init();
        }
    });

    function createSwiper({ selector, props = {}, initFunc }) {
        const { speed, loop, init, slidesPerPage, pagination, spaceBetween} = props;

        const newSwiper =  new Swiper(selector, {
            speed: speed || 400,
            loop: typeof loop !== 'undefined' ? loop : true,
            init: typeof init !== 'undefined' ? init : true,
            spaceBetween: spaceBetween || 0,
            slidesPerPage: slidesPerPage || 1,
            pagination: pagination || {
                el: '.swiper-pagination',
                type: 'bullets',
                bulletElement: 'button',
                clickable: true
            }
        }); 

        if (init) {
            return newSwiper;
        }

        newSwiper.on('init', () => {
            initFunc();
        });

        newSwiper.init();
    }

}