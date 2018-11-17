var weight, wrist, waist, hip, forearm, bodyFat, isMetric = false, isMale = false;
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
		jQuery("span",".tabviews").each(function(n){
			jQuery(this).click(function(){
				if (n == 0) {
					jQuery(".non-male").removeClass("hide");
					jQuery(this).addClass("on");
					jQuery(this).next().removeClass("on");
					isMale = false;
				} else {
					jQuery(".non-male").addClass("hide");	
					jQuery(this).addClass("on");
					jQuery(this).prev().removeClass("on");
					isMale = true;
				}
				jQuery("#txtAnswer").val("");
				jQuery("table.mortgageTable tbody:first td").html("Click the Calculate button to see your report.");
			});							  
		});

		//all textbox
		jQuery(":text", ".panel2").each(function(){
			jQuery(this).click(function(){
				jQuery(this).focus().select();					   
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
		weight = parseFloat(jQuery("#txtWeight-1").val());
		wrist = parseFloat(jQuery("#txtWrist-1").val());
		waist = parseFloat(jQuery("#txtWaist-1").val());
		hip = parseFloat(jQuery("#txtHip-1").val());
		forearm = parseFloat(jQuery("#txtForearm-1").val());
	} else {
		weight = parseFloat(jQuery("#txtWeight").val());
		wrist = parseFloat(jQuery("#txtWrist").val());
		waist = parseFloat(jQuery("#txtWaist").val());
		hip = parseFloat(jQuery("#txtHip").val());
		forearm = parseFloat(jQuery("#txtForearm").val());
	}
}

function validate(){
	var isGoodForm = true;
	
	jQuery(":text" , ".panel2").not("#txtAnswer").each(function(n){
		if (isNaN(jQuery(this).val())) {
			isGoodForm = false;
			jQuery(this).css("color", "red");
			jQuery("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else {
			jQuery(this).css("color", "#000");
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
	jQuery("#txtAnswer").val(bodyFat);
}

//
function doReport(){
	
	jQuery("#report").html(bodyFat);
	
}
})(jQuery);