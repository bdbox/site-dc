var height, neck, waist, hip, abdomen, bodyFat, isMetric = false, isMale = false;
(function($){
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
			$(".summary").html("Click the Calculate button to see your report.");
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
				$(".male-only").addClass("hide");
				$(this).addClass("on");
				$(this).next().removeClass("on");
				isMale = false;
			} else {
				$(".non-male").addClass("hide"); 	
				$(".male-only").removeClass("hide");
				$(this).addClass("on");
				$(this).prev().removeClass("on");
				isMale = true;
				console.log("male");
			}
			$("#txtAnswer").val("");
			$(".summary").html("Click the Calculate button to see your report.");
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
	
	
		
});//ready

function getData(){
	if (isMetric){
		height = parseFloat($("#txtHeight-1").val());
		neck = parseFloat($("#txtNeck-1").val());
		waist = parseFloat($("#txtWaist-1").val());
		hip = parseFloat($("#txtHip-1").val());
		abdomen = parseFloat($("#txtAbdomen-1").val());
	} else {
		height = parseFloat($("#txtHeight").val());
		neck = parseFloat($("#txtNeck").val());
		waist = parseFloat($("#txtWaist").val());
		hip = parseFloat($("#txtHip").val());
		abdomen = parseFloat($("#txtAbdomen").val());
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
		height = height * 0.393701;
		neck = neck * 0.393701;
		waist = waist * 0.393701;
		hip = hip * 0.393701;
		abdomen = abdomen * 0.393701;
		
		if (isMale){
		//var temp = (height * 1.082 + 94.42) - (waist*4.15);
		//bodyFat = ((height - temp) *100 / height).toFixed(2);
			bodyFat = 86.010 * log10(abdomen - neck) - 70.041 * log10(height) + 36.76;
		}else {
			//var temp = (height * 0.732 + 8.987) + (neck/3.14) - (waist*0.157) - (hip*0.249) + (abdomen*0.434);
			//bodyFat = ((height - temp) *100 / height).toFixed(2);
			bodyFat = 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387;
		}
	}else {
		if (isMale){
			//var temp = (height * 1.082 + 94.42) - (waist*4.15);
			//bodyFat = ((height - temp) *100 / height).toFixed(2);
				bodyFat = 86.010 * log10(abdomen - neck) - 70.041 * log10(height) + 36.76;
			}else {
				//var temp = (height * 0.732 + 8.987) + (neck/3.14) - (waist*0.157) - (hip*0.249) + (abdomen*0.434);
				//bodyFat = ((height - temp) *100 / height).toFixed(2);
				bodyFat = 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387;
			}
	}
	$("#txtAnswer").val(bodyFat.toFixed(2) + "%");
}

//
function doReport(){
	
	$(".summary").html("The body fat percentage is " + bodyFat.toFixed(2) + "%");
	
}

//
function log10(val) {
	  return Math.log(val) / Math.LN10;
	}

})(jQuery);