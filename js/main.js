$(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt="arrow next"></img></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt="arrow prev"></img></button>',
        fade: true,
        dots: true,
        responsive: [
            {
                breakpoint: 451,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})