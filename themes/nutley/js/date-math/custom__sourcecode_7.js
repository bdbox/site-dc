jQuery.noConflict();
(function($) {

$(document).ready(function(){
	//
	$("#txtStart").datepicker();
	
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
	$(".panel2 input").change(function(){
		cancelReport();
	});
			
});//ready

//
function validate(){
	var isGoodForm = true;
	
	$("#txtYear, #txtMonth, #txtDay, #txtWeek").each(function(n){
		if (isNaN($(this).val())) {
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
	var startDay, years, months, weeks, days, newDate, mode;
	reportStr = "";
	
	mode = $("#mode").val();
	startDay = $("#txtStart").val();
	startDay = Date.parse(startDay);
	
	years = parseInt($("#txtYear").val());
	months = parseInt($("#txtMonth").val());
	weeks = parseInt($("#txtWeek").val());
	days = parseInt($("#txtDay").val());
	if (weeks > 0) {
		if (days)
			days = days + weeks * 7;	
		else
			days = weeks * 7;
	}
	if (mode == "minus"){
		years = -years;
		months = -months;
		days = -days;
	}
	
	reportStr += "From date: <strong>" + startDay.toString("MMM d,yyyy") + "</strong>,<br />";
	newDate = startDay.add({days:days, months: months, years: years });
	
	
	
	reportStr += (mode == "plus")?"added ": "subtracted ";
	if (Math.abs(years) == 1) 
		reportStr += "<b>" + Math.abs(years) + " year</b>, ";
	else if(Math.abs(years) > 1)
		reportStr += "<b>" + Math.abs(years) + " years</b>, ";
		
	if (Math.abs(months) == 1) 
		reportStr += "<b>" + Math.abs(months) + " month</b>, ";
	else if (Math.abs(months) > 1) 
		reportStr += "<b>" + Math.abs(months) + " months</b>, ";
		
	if (Math.abs(days) == 1) 
		reportStr += "<b>" + Math.abs(days) + " day</b>, ";
	else if (Math.abs(days) > 1) 
		reportStr += "<b>" + Math.abs(days) + " days</b>, ";


	reportStr += "<br />resulting date is <strong>" + newDate.toString("MMM d,yyyy") + "</strong>.";
	
	doReport();
}

//
function doReport(){
	$("#report-context").html(reportStr);
	
}

//
function cancelReport(){
	$("#reportDiv").datepicker("destroy");
	$("#report-context").html("");
}

	
	
})(jQuery);