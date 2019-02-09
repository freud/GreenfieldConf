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
// $(document).ready(function() {
//     countdown(
//         new Date(Date.UTC('2019/02/11 12:00')),
//         function(ts) {
//             $("#days").text(ts.days);
//             $("#hours").text(ts.hours);
//             $("#minutes").text(ts.minutes);
//             $("#seconds").text(ts.seconds);
//         },
//         countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
// });
//Ticket counter
$(document).ready(function() {
	var moment = require('moment');
	require('moment-timezone');
	require('moment-countdown');

	moment().tz("Europe/Warsaw").format();

	var $days = $('#days'),
		$hours = $('#hours'),
		$minutes = $('#minutes'),
		$seconds = $('#seconds'),
	eventTime = moment.tz('11-02-2019 12:00:00', 'DD-MM-YYYY HH:mm:ss', 'Europe/Warsaw').unix(),
	currentTime = moment.tz("Europe/Warsaw").unix(),
	diffTime = eventTime - currentTime,
	duration = moment.duration(diffTime * 1000, 'milliseconds'),
	interval = 1000;

	var $d = $('<span id="days"></span>').appendTo($days),
		$h = $('<span id="hours"></span>').appendTo($hours),
		$m = $('<span id="minutes"></span>').appendTo($minutes),
		$s = $('<span id="seconds"></span>').appendTo($seconds);

	setInterval(function(){

		duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
		var d = moment.duration(duration).days(),
			h = moment.duration(duration).hours(),
			m = moment.duration(duration).minutes(),
			s = moment.duration(duration).seconds();

		d = $.trim(d).length === 1 ? '0' + d : d;
		h = $.trim(h).length === 1 ? '0' + h : h;
		m = $.trim(m).length === 1 ? '0' + m : m;
		s = $.trim(s).length === 1 ? '0' + s : s;

		// show how many hours, minutes and seconds are left
		$d.text(d);
		$h.text(h);
		$m.text(m);
		$s.text(s);

	}, interval);


});