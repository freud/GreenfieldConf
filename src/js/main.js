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
    var numberOfSlideToReorder = slides.length;
    var lastSlideIndex = numberOfSlideToReorder - 1;
    if (numberOfSlideToReorder == 0)
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
        $(slides[0]).insertAfter(slides[lastSlideIndex]);
        slides = $(".carousel-item.partner-slide");
    }

    // SaveRaise and save new offset
    bannersReoderingOffset++;
    if (bannersReoderingOffset > lastSlideIndex) {
        bannersReoderingOffset = 0
    }

    $.cookie('banners-reodering-offset', bannersReoderingOffset);
}

// Sponsors carousel methods & events
$(document).ready(function(){
	$('.sponsors-carousel').carousel({
		interval: 3000,
		pause: "false"
	});
});

//Ticket counter
$(document).ready(function() {
    countdown(
        new Date('2019/02/11 12:00 AM CET'),
        function(ts) {
            $("#days").text(ts.days);
            $("#hours").text(ts.hours);
            $("#minutes").text(ts.minutes);
            $("#seconds").text(ts.seconds);
        },
        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
});