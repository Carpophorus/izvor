$(document).ready(function() {
    var s = $("#menu-items-scroll");
    if (s == null) return;
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

// $(document).ready(function() {
//     var s = $("#docs");
//     if (s == null) return;
//     $(window).scroll(function() {
//         var windowpos = $(window).scrollTop();
//         var width = $(window).width();
//         if (windowpos >= width*55/100) {
//             s.removeClass("no-fixer1");
//             s.addClass("fixer1");
//         } else {
//             s.removeClass("fixer1");
//             s.addClass("no-fixer1");
//         }
//     });
// });

$(document).ready(function() {
    var s = $("#menu-lines-scroll");
    if (s == null) return;
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var width = $(window).width();
        if (windowpos >= width*53.6/100) {
            s.removeClass("no-fixer2");
            s.addClass("fixer2");
        } else {
            s.removeClass("fixer2");
            s.addClass("no-fixer2");
        }
    });
});

$(document).ready(function() {
    var s = $("#pnav");
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var anchor = ($("#products2").position() || {"anchor": NaN}).top;
        var width = $(window).width();
        if (width > 1000) width = 1000;
        if (windowpos >= anchor) {
            s.css({
                'position': 'absolute',
                'margin-left': '15%',
                'padding-top': 13*width/100,
                'width': '70%',
                'visibility': 'visible'
            });
        } else {
            s.css({
                'position': 'absolute',
                'margin-left': '15%',
                'padding-top': ((windowpos/anchor)*13)*width/100,
                'opacity': (windowpos/anchor),
                'width': '70%',
                'visibility': 'visible'
            });
        }
    });
});

$(document).ready(function() {
    var s1 = $("#products4");
    var s2 = $("#products5");
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        var anchor = ($("#products2").position() || {"anchor": NaN}).top;
        var width = $(window).width();
        if (windowpos >= anchor) {
            s1.css({
                'visibility': 'hidden'
            });
            s2.css({
                'visibility': 'hidden'
            });
        } else if (windowpos >= anchor*2/3) {
            s1.css({
                'visibility': 'visible',
                'opacity': (1 - (windowpos - anchor*2/3)*3/anchor)
            });
            s2.css({
                'visibility': 'visible',
                'opacity': (1 - (windowpos - anchor*2/3)*3/anchor)
            });
        } else {
            s1.css({
                'visibility': 'visible',
                'opacity': 1
            });
            s2.css({
                'visibility': 'visible',
                'opacity': 1
            });
        }
    });
});