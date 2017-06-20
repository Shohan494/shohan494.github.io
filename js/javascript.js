$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});

$(document).ready(function () {
    // Handler for .ready() called.
    $('.skill').click(function () {
        $('html, body').animate({
            scrollTop: $('#myskill').offset().top
        }, 'slow');
    });
});

$(document).ready(function () {
    // Handler for .ready() called.
    $('.home').click(function () {
        $('html, body').animate({
            scrollTop: $('#myhome').offset().top
        }, 'slow');
    });
});