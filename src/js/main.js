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
})