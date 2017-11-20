$(window).scroll(function(){
    if($(this).scrollTop() == 0){
        $('nav').removeClass('shrink',1000);
    }
    else {
        $('nav').addClass('shrink',1000, "easeOutSine");
    }
});