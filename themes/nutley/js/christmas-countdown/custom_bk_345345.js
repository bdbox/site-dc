(function($){
	$(document).ready(function(){
		var yr;
		
		var tday = new Date();
		console.log(tday);
		yr = tday.getFullYear();
		
		var cday = new Date(yr, 11, 25);
		var cday2 = new Date(yr+1, 0, 1);
		
		if (tday > cday && tday < cday2)
			yr++;
		
		$("#countdownhead").html(yr + " Christmas");
							   
		var t = new Date();					   
		var offset = t.getTimezoneOffset()/60;		
		$('#countdown').countdown({until: new Date(yr, 12 - 1, 25), timezone: -offset});
	});
})(jQuery);