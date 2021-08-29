  $(document).ready(function() {
    if ($(window).width() >= 990) {
        $(".test").remove();
        $(".myContainer").show();
    }

    if ($(window).width() < 990 && $(window).width() > 765) {
        $("#wrapper").toggleClass("toggled");
    }

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});