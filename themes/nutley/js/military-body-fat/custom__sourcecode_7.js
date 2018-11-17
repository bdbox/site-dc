var weight, wrist, waist, hip, forearm, bodyFat, isMetric = false, isMale = false;
$(document).ready(function(){
	
	//radio buttons
	$(":radio", ".panel2").each(function(n){
		if (n == 0) {
			$(this).removeAttr("checked");	
		}
		if (n == 1) {
			$(this).attr({"checked": "checked"});	
		}
		$(this).click(function(){
			$("#txtAnswer").val("");
			$("table.mortgageTable tbody:first td").html("Click the Calculate button to see your report.");
			if (n==0) {
				$("#w-metricDiv").removeClass("hide");	
				$("#w-imperialDiv").addClass("hide");	
				isMetric = true;
			} else {
				$("#w-imperialDiv").removeClass("hide");	
				$("#w-metricDiv").addClass("hide");	
				isMetric = false;
			}
		});						  
	});
	
	//tabviews
	$("span",".tabviews").each(function(n){
		$(this).click(function(){
			if (n == 0) {
				$(".non-male").removeClass("hide");
				$(this).addClass("active");
				$(this).next().removeClass("active");
				isMale = false;
			} else {
				$(".non-male").addClass("hide");	
				$(this).addClass("active");
				$(this).prev().removeClass("active");
				isMale = true;
			}
			$("#txtAnswer").val("");
			$("table.mortgageTable tbody:first td").html("Click the Calculate button to see your report.");
		});							  
	});

	//all textbox
	$(":text", ".panel2").each(function(){
		$(this).click(function(){
			$(this).focus().select();					   
		});
	});
	
	//
	$("#calculateBtn").bind("click", function(){
		if (validate()) {
			getData();
			calculate();	
			doReport();
		}
	});
	
	//on page load
	if (validate()) {
			getData();
			calculate();	
			doReport();
		}
		
});//ready

function getData(){
	if (isMetric){
		weight = parseFloat($("#txtWeight-1").val());
		wrist = parseFloat($("#txtWrist-1").val());
		waist = parseFloat($("#txtWaist-1").val());
		hip = parseFloat($("#txtHip-1").val());
		forearm = parseFloat($("#txtForearm-1").val());
	} else {
		weight = parseFloat($("#txtWeight").val());
		wrist = parseFloat($("#txtWrist").val());
		waist = parseFloat($("#txtWaist").val());
		hip = parseFloat($("#txtHip").val());
		forearm = parseFloat($("#txtForearm").val());
	}
}

function validate(){
	var isGoodForm = true;
	
	$(":text" , ".panel2").not("#txtAnswer").each(function(n){
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

function calculate(){ 
	if (isMetric){
		weight = weight * 2.204623;
		wrist = wrist * 0.393701;
		waist = waist * 0.393701;
		hip = hip * 0.393701;
		forearm = forearm * 0.393701;
		
		if (isMale){
		var temp = (weight * 1.082 + 94.42) - (waist*4.15);
		bodyFat = ((weight - temp) *100 / weight).toFixed(2);
		}else {
			var temp = (weight * 0.732 + 8.987) + (wrist/3.14) - (waist*0.157) - (hip*0.249) + (forearm*0.434);
			bodyFat = ((weight - temp) *100 / weight).toFixed(2);
		}
	}else {
		if (isMale){
		var temp = (weight * 1.082 + 94.42) - (waist*4.15);
		bodyFat = ((weight - temp) *100 / weight).toFixed(2);
		}else {
			var temp = (weight * 0.732 + 8.987) + (wrist/3.14) - (waist*0.157) - (hip*0.249) + (forearm*0.434);
			bodyFat = ((weight - temp) *100 / weight).toFixed(2);
		}
	}
	$("#txtAnswer").val(bodyFat);
}

//
function doReport(){
	
	$("#report").html(bodyFat);
	
}
