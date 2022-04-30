$(function(){
    var fadeIn = $('.fadein');
    $(window).on('scroll', function () {
    $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
        }
    });
});
    $('.drawer-list a').click(function(){
        $('label').trigger('click');
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position
        }, 500);
    });

    $('label').click(function(){
        const sector = $('body').children();
        $(sector).not('content').toggleClass('blur');
    });
});
