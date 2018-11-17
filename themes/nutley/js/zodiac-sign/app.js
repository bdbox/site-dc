
var $ = jQuery;
function getStar(){
	var month = $("#monthSelect").val();
	var day = $("#daySelect").val();
	var nMonth = parseInt(month);
	var nDay = parseInt(day);
	var nDate = nMonth * 100 + nDay;
	var sStar = "";
	$(".summary div").removeClass();
	if(nDate >= 120 && nDate <= 219){
		$(".summary div").addClass("Aquarius");
	}else if (nDate >= 220 && nDate <= 320){
		$(".summary div").addClass("Pisces");
	}else if (nDate >= 321 && nDate <= 420){
		$(".summary div").addClass("Aries");
	}else if (nDate >= 421 && nDate <= 520){
		$(".summary div").addClass("Taurus");
	}else if (nDate >= 521 && nDate <= 621){
		$(".summary div").addClass("Gemini");
	}else if (nDate >= 622 && nDate <= 722){
		$(".summary div").addClass("Cancer");
	}else if (nDate >= 723 && nDate <= 822){
		$(".summary div").addClass("Leo");
	}else if (nDate >= 823 && nDate <= 922){
		$(".summary div").addClass("Virgo");
	}else if (nDate >= 923 && nDate <= 1022){
		$(".summary div").addClass("Libra");
	}else if (nDate >= 1023 && nDate <= 1121){
		$(".summary div").addClass("Scorpio");
	}else if (nDate >= 1122 && nDate <= 1221){
		$(".summary div").addClass("Sagittarius");
	}else if (nDate >= 1222 || nDate <= 119){
		$(".summary div").addClass("Capricorn");
	}	
				
	
}

