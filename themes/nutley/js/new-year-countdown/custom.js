(function($){
$(document).ready(function(){
	var yr;

	var tday = new Date();
	yr = tday.getFullYear();

	$("#countdownhead").html((yr+1) + " New Year");

	var t = new Date();
	var offset = t.getTimezoneOffset()/60;
	$('#countdown').countdown({until: new Date(yr+1, 1 - 1, 1), timezone: -offset});
});
})(jQuery);
