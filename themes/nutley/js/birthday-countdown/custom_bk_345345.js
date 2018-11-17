(function ($) {
	$(document).ready(function(){
		var month, day;
		var yr, mon, dy;
		
		var tday = new Date();

		yr = tday.getFullYear();
		mon = tday.getMonth();
		dy = tday.getDate();
			
		var cday2 = new Date(yr+1, 0, 1);	
							   
		var t = new Date();					   
		var offset = t.getTimezoneOffset()/60;		
		
		//
		$("#calculateBtn").click(function(){
			$("#countdown").countdown('destroy');							  
										  
			month = parseInt($("#month").val());	
			day = parseInt($("#day").val());
			
			var birthday  = new Date(yr, month-1, day);
			
			if (mon == (month-1) && day == dy){
				sayHappyBday();	
			} else if (tday > birthday && tday < cday2 ){
				$('#countdown').countdown({until: new Date(yr+1, month - 1, day), timezone: -offset});
				$("#countdownhead").html("Your coming birthday: " + (yr+1) + "-" + month + "-" + day);
			} else {
				$('#countdown').countdown({until: new Date(yr, month - 1, day), timezone: -offset});
				$("#countdownhead").html("Your birthday: " + yr + "-" + month + "-" + day);
			}
			
			
		});
		
		//
		function sayHappyBday(){
			$("#countdown").html("<h2>HAPPY BIRTHDAY!</h2>");
		}
		
		//
		
		
		
	});
})(jQuery);