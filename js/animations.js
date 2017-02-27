$(document).ready(function() {
    var s = $("#menu-items-scroll");
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var width = $(window).width();
        if (windowpos >= width*55/100) {
            s.removeClass("no-fixer");
            s.addClass("fixer");
        } else {
            s.removeClass("fixer");
            s.addClass("no-fixer");
        }
    });
});