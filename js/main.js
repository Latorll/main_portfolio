const fadeIn = $('.fadein');
$(window).on('scroll', function () {
    // スクロールアニメーション
    $(fadeIn).each(function () {
        const offset = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
        $(this).addClass('scroll-in');
        }
    });

    const y = window.scrollY;
    if(y>780){
        $('label').addClass('white');
    }else{
        $('label').removeClass('white');
    }
});
$('.drawer-list a').click(function(){
    $('label').trigger('click');
    const id = $(this).attr('href');
    const position = $(id).offset().top;
    $('html,body').animate({
        'scrollTop': position
    }, 500);
});

$('label').click(function(){
    const sector = $('body').children();
    $(sector).not('content').toggleClass('blur');
});
