jQuery.noConflict();
(function($) {

$(document).ready(function(){
	//
	$("#txtStart, #txtEnd").datepicker();
	
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
	$("#txtStart, #txtEnd").change(function(){
		cancelReport();
	});
			
});//ready

//
function validate(){
	var isGoodForm = true;
	
	$("#txtStart, #txtEnd").each(function(n){
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
var reportStr;

function calculate(){ 
	var startDay, endDay, days;
	reportStr = "";
	
	startDay = $("#txtStart").val();
	startDay = new Date(startDay);
	endDay = $("#txtEnd").val();
	endDay = new Date(endDay);
	
	days = Math.abs((endDay.getTime() - startDay.getTime())/(24*60*60*1000));
	
	if (days == 1)
		reportStr += "There are total <strong>" + days.toFixed(0) + "</strong> day between <strong>";
	if (days > 1)
		reportStr += "There are total <strong>" + days.toFixed(0) + "</strong> days between <strong>";

	reportStr += startDay.toLocaleString() + "</strong> and <strong>" + endDay.toLocaleString() +"</strong>.<br />";
	
	if(days < 14 && days > 7) {
			reportStr += "That's <strong>" + Math.floor(days/7) + "</strong> week and <strong>";
			if (days%7 == 1)
				reportStr += Math.round(days%7) + "</strong> day.";
			else if (days%7 >1)
				reportStr += Math.round(days%7) + "</strong> days.";
	} else if (days >=14){
			reportStr += "That's <strong>" + Math.floor(days/7) + "</strong> weeks and <strong>";
			if (days%7 == 1)
				reportStr += Math.round(days%7) + "</strong> day.";
			else if (days%7 >1)
				reportStr += Math.round(days%7) + "</strong> days.";	
	}
	
	doReport(days);
}

//
function doReport(dt){
	$("#report-context").html(reportStr);
	
}

//
function cancelReport(){
	$("#reportDiv").datepicker("destroy");
	$("#report-context").html("");
}

	
	
})(jQuery);