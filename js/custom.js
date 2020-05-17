$(function () {
    //    navbar
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
    });

    //    counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //    venobox
    $(document).ready(function () {
        $('.venobox').venobox({
            spinner: 'cube-grid',
            framewidth: '500px',
            frameheight: '400px',
        });
    });

    $(document).ready(function () {
        $('.veno_img').venobox({
            spinner: 'cube-grid',
            framewidth: '300px',
            frameheight: '200px',
        });
    });

    //    sticky menu
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('.sticky-top').removeClass('sticky');
        } else {
            $('.sticky-top').addClass('sticky');
        }
    });

    //smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });


    //    BACK TO TOP BUTTON


    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 1500) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });
    $('.back_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    //    preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(1000).fadeOut(500);
    });




});
