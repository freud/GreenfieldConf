window.onload = () => {
    const breakpoints = {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200
    };

    const swipers = {};

    new SmoothScroll('.scroll-trigger', {speed: 300});

    // Uncomment if there is more than one partner
    // createSwiper({
    //     selector: '#swiper-partners',
    //     props: {
    //         spaceBetween: 60
    //     }
    // });
    
    createSwiper({
        selector: '#swiper-speakers', 
        props: { 
            init: false,
            spaceBetween: 30
         },
        initFunc: () => {
            speakerModal.init();
        }
    });

    createSwiper({
        selector: '#swiper-speakers-arrows', 
        props: { 
            spaceBetween: 80,
            slidesPerView: 1,
            init: false,
            breakpoints: {
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 }
            }
         },
         initFunc: () => {
            speakerModal.init();
        }
    });

    createSwiper({ 
            selector: '#swiper-tickets', 
            props: { 
                slidesPerView: 1,
                init: true,
                breakpoints: {
                    576: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                }
            },
            breakpoint: 'md' 
    });


    function createSwiper({ selector, props = {}, initFunc, breakpoint }) {

        if (!breakpoint) {
            setSwiper();
        } else {
            setSwiperOnBreakpoint();
            window.addEventListener('resize', setSwiperOnBreakpoint);
        }

        function setSwiperOnBreakpoint() {
            let swiper = swipers[selector];
            if (window.innerWidth < breakpoints[breakpoint] && !swiper) {
                swipers[selector] = setSwiper();
            } else if (window.innerWidth >= breakpoints[breakpoint] && swiper) {
                swipers[selector].destroy();
                swipers[selector] = undefined;
                document.querySelector(selector).querySelector('.swiper-pagination').innerHTML = '';
            }
        }

        function setSwiper() {
            const { speed, loop, init, slidesPerView, pagination, spaceBetween, breakpoints, slidesPerGroup } = props;

            const newSwiper =  new Swiper(selector, {
                speed: speed || 400,
                loop: typeof loop !== 'undefined' ? loop : true,
                init: typeof init !== 'undefined' ? init : true,
                spaceBetween: spaceBetween || 0,
                slidesPerView: slidesPerView || 1,
                slidesPerGroup: slidesPerGroup || 1,
                pagination: pagination || {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    bulletElement: 'button',
                    clickable: true
                },
                breakpointsInverse: true,
                breakpoints: breakpoints || {}
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

}