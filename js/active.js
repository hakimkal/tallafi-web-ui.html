(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        $(".partner-slides").owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    center: true,
                },
                600: {
                    items: 3,
                    nav: false,
                    center: true,
                },
                1000: {
                    items: 5,
                    nav: false,
                    center: true,
                }
            }
        })
    }
    if ($.fn.owlCarousel) {
        $(".hero-slides").owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dot: true,
                    center: true,
                },
                600: {
                    items: 1,
                    nav: false,
                    dot: true,
                    center: true,
                },
                1000: {
                    items: 1,
                    nav: false,
                    dot: true,
                    center: true,
                }
            }
        })
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // Sticky Active Code
    if ($.fn.sticky) {
        $("#header").sticky({
            topSpacing: 0
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    var $window = $(window);

    // Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    let openState = `Open +`
    let closeState = `Close -`

    $(".tf-faqs .set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(this).find("span").html(openState)
        } else {
            $(this).addClass("active");
            $(this)
                .siblings(".content")
                .slideDown(200);
            $(this).find("span").html(closeState)
        }
    });

})(jQuery);