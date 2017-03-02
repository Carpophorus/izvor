$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

$(document).ready(function() {
    var s = $("#lace");
    s.removeClass("hidden-sm");
    s.removeClass("hidden-xs");
});