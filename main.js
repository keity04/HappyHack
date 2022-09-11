// 画像切り替え
$(function ($) {
    $('.bg-swicher').bgSwitcher({
        images: ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/background4.jpg', 'images/background5.jpg'],
        interval: 5000,
        loop: true,
    });

    // スライダー
    $('.slider').slick({
        autoplay: false,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        // centerMode: true,
        // centerPadding: '100%',
    });
});

// ふわっと表示

window.onload = function () {
    fade_effect();

    $(window).scroll(function () {
        fade_effect();
    });

    function fade_effect() {
        $('.fade').each(function () {
            const targetElement = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).addClass('view');
            }
        });
    }
};

