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

// Sponsors carousel methods & events
$(document).ready(function(){
	$('.sponsors-carousel').carousel({
		interval: 3000,
		pause: "false"
	})
})

//Ticket counter
$(document).ready(function(){
	const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

let countDown = new Date('Jan 18, 2019 12:00:00').getTime(),
	x = setInterval(function() {

		let now = new Date().getTime(),
			distance = countDown - now;

		document.getElementById('days').innerHTML = Math.floor(distance / (day)),
			document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
			document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
			document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
	}, second)
})