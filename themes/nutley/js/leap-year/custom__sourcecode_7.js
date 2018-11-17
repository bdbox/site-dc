jQuery.noConflict();
(function($) {

$(document).ready(function(){	
	
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
	var s = $("#txtStart").val();
	var e = $("#txtEnd").val();
	
	$("#txtStart, #txtEnd").each(function(n){
		if (isNaN($(this).val())) {
			isGoodForm = false;
			$(this).css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else if (e < s){ 
			isGoodForm = false;
			$("#txtEnd").css("color", "red");
			$("#err-msg").html("End year must be after start year.").show().delay(3000).fadeOut(1000);
		} else {
			$(this).css("color", "#000");
		}
		
	});
	
	return isGoodForm;
}//validate

//specific days array
var reportStr;

function calculate(){ 
	var startDay, endDay, found = false;
	reportStr = "Leap years:<br />";
	
	startDay = $("#txtStart").val();
	endDay = $("#txtEnd").val();
	
	for (var i=startDay; i<=endDay; i++){
		if (isLeap(i)){
			reportStr += i + "<br />";	
			found = true;
		}
	}
	
	if (!found)
		reportStr += "No leap year found.";
	
	doReport();
}

//
function doReport(){
	$("#report-context").html(reportStr);
}

//
function cancelReport(){
	$("#report-context").html("");
}

//
function isLeap(y){
	return !(y % 4) && (y % 100) || !(y % 400);	
}

	
	
})(jQuery);