jQuery.noConflict();
(function($) {

$(document).ready(function(){
	//
	$("#txtLMP").datepicker();
	
	//all textbox
	$(":text", ".panel2").each(function(){
		$(this).click(function(){
			$(this).focus().select();					   
		});
	});	

	//
	$("#calculateBtn").click(function(){
		if (validate()) {
			calculate();	
		}
	});
	
	//
	$("#txtLMP").change(function(){
		cancelReport();
	});
	$("#selectCycles").change(function(){
		cycles = parseInt($(this).val());								   
		cancelReport();
	});
	$(window).load(function(){
		$("#selectCycles").val("28");
		$("#txtAnswer").val("");
	});
			
});//ready

//
function validate(){
	var isGoodForm = true;
	
	$("#txtLMP").each(function(n){
		if ($(this).val() == "") {
			isGoodForm = false;
			$(this).css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else {
			$(this).css("color", "#000");
		}
		
	});
	
	return isGoodForm;
}//validate

//specific days array
var dates = new Array(), tips = new Array(), colors = new Array(), lmp, cycles = 28, reportStr;

function calculate(){ 
	dates = [];
	tips = [];
	colors = [];
	reportStr = "";
	
	lmp = $("#txtLMP").val();
	lmp = new Date(lmp);
	reportStr += "First day of Last Menstrual Period is " + lmp.toDateString() + "<br />";
		
	for (i =0; i <= 3; i ++){
		var tempLmp = addDays(lmp, cycles*i);
		//lmp
		dates.push(tempLmp);
		if (i == 0)
			tips.push("First day of Last Menstrual Peroid");
		else
			tips.push("Estimated first day of next peroid");
		colors.push("highlight-1");
		
		//ovulation
		for (j=0; j <= 4; j++){
			dates.push(addDays(tempLmp, (14 + cycles - 28 + 1 - 3 + j)));
			tips.push("Estimated ovulation date");
			colors.push("highlight-2-" + j);
			if (j == 0) 
				reportStr += "Estimated ovulation window is from " + addDays(tempLmp, (14 + cycles - 28 + 1 - 3 + j)).toDateString();
			if (j == 4)
				reportStr += " to " + addDays(tempLmp, (14 + cycles - 28 + 1 - 3 + j)).toDateString() + "<br />"
		}
	}
	
		
	//
	var ovulation = addDays(lmp, (14 + cycles - 28));
	
	$("#txtAnswer").val( ovulation.toDateString());
	doReport(lmp);
}

//
function doReport(dt){
	$("#report-context").html(reportStr);
	$("#reportDiv").datepicker("refresh").datepicker({
	  defaultDate: dt,
      numberOfMonths: 3,
	  beforeShowDay: highlightDays
    });
	
	$(".the-legend").show();
}

//
function cancelReport(){
	$("#reportDiv").datepicker("destroy");
	$("#report-context").html("");
	$(".the-legend").hide();
}


//
function highlightDays(date) {
  for (var i = 0; i < dates.length; i++) {
	  if (new Date(dates[i]).toString() == date.toString()) {              
		  return [true, colors[i], tips[i]];
	  }
  }
  return [true, ''];
} 



//add days 
function addDays(date, amount){
	var tzOff = date.getTimezoneOffset() * 60 * 1000;
	var t = date.getTime();
	t += (1000 * 60 * 60 * 24) * amount;
	var d = new Date();
	d.setTime(t);
	var tzOff2 = d.getTimezoneOffset() * 60 * 1000;
	if (tzOff != tzOff2)
	{
		var diff = tzOff2 - tzOff;
		t += diff;
		d.setTime(t);
	}
	return d;

}
	
	
})(jQuery);