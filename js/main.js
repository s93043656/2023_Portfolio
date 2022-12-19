$(document).scroll(function() {
    var topy = $(this).scrollTop();
    var windowWidth =$(window).width();
    if (topy > 400 & windowWidth > 1080) {
        $('.navbar #navbarNav ul').addClass('bgc'),
        $('.navtop').css('display','block');
    } else {
        $('.navbar #navbarNav ul').removeClass('bgc'),
        $('.navtop').css('display','none');
    }
});
