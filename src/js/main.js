$(window).scroll(function(){
    if($(this).scrollTop() == 0){
        $('header nav').removeClass('shrink',1000);
        $('header nav').addClass('top',1000, "easeOutSine");
    }
    else {
        $('header nav').addClass('shrink',1000, "easeOutSine");
        $('header nav').removeClass('top',1000);
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#mainCarousel').carousel({
        interval: 5000
    });

    reoderSlides();
})

function reoderSlides()
{
    // slides reordering
    var slides = $(".carousel-item.partner-slide");
    if (slides.length == 0)
    {
        return;
    }

    var bannersReoderingOffset = $.cookie('banners-reodering-offset');
    if (!bannersReoderingOffset) {
        bannersReoderingOffset = 0;
    }
    
    // reorder banners
    for(var i=0; i<bannersReoderingOffset; i++)
    {
        $(slides[0]).insertAfter(slides[3]);
        slides = $(".carousel-item.partner-slide");
    }    

    // SaveRaise and save new offset
    bannersReoderingOffset++;
    if (bannersReoderingOffset > 3) {
        bannersReoderingOffset = 0
    }

    $.cookie('banners-reodering-offset', bannersReoderingOffset);

}