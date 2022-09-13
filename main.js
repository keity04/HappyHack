// 画像切り替え
$(function ($) {
    $('.bg-swicher').bgSwitcher({
        images: ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg', 'images/background4.jpg', 'images/background5.jpg'],
        interval: 5000,
        loop: true,
    });

    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    });

    // スライダー
    // $('.slider').slick({
    //     autoplay: false,
    //     dots: true,
    //     arrows: true,
    //     slidesToShow: 4,
    //     // centerMode: true,
    //     // centerPadding: '100%',
    // });

});