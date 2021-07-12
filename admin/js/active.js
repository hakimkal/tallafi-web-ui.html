(function ($) {
    'use strict';

    var $window = $(window);

    // Preloader active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    $(".tf-custom-select .tf-select-input-box input").on("click", function () {
        if ($('.tf-custom-select .select-options').hasClass("open")) {
            $('.tf-custom-select .select-options').removeClass("open");
        } else {
            $('.tf-custom-select .select-options').addClass("open");
        }
    });
    $(".tf-custom-select .select-options a").on("click", function (e) {
        e.preventDefault();
        let selectValue = $(this).text();
        $('.tf-custom-select .tf-select-input-box input').val(selectValue);
        $('.tf-custom-select .select-options').removeClass("open");
    });

})(jQuery);