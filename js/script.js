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

$(document).ready(function() {
	var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
    	$("#index2").css({ 'background-attachment': 'scroll' });
    	$("#index4").css({ 'background-attachment': 'scroll' });
    	$("#index6").css({ 'background-attachment': 'scroll' });
    	$("#index8").css({ 'background-attachment': 'scroll' });
    }
});