var h, w, age, bmr, isMetric = false, isMale = false;
jQuery.noConflict();
(function($) {

$(document).ready(function(){
	
	//radio buttons
	$("input:radio[name='radio1']").each(function(n){
		$(this).click(function(){
			if (n==0) {
				$("#metricDiv").removeClass("hide");	
				$("#imperialDiv").addClass("hide");	
				isMetric = true;
			} else {
				$("#imperialDiv").removeClass("hide");	
				$("#metricDiv").addClass("hide");	
				isMetric = false;
			}
		});						  
	});
	$("input:radio[name='radio2']").each(function(n){
		$(this).click(function(){
			if (n==0) {
				isMale = true;
			} else {
				isMale = false;
			}
		});						  
	});
	
	//all textbox
	$("input:text").each(function(){
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
		h = parseFloat($("#txtHeightMetric").val());
		w = parseFloat($("#txtWeightMetric").val());
	} else {
		h = parseFloat($("#txtHeightFoot").val())*12 + parseFloat($("#txtHeightInch").val());
		w = parseFloat($("#txtWeightPound").val());

	}
	age = parseFloat($("#txtAge").val());
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
		if (isMale){
			bmr = 66.5 + 13.75 * w + 5.003 * h - 6.755*age;
		}else{
			bmr = 655.1 + 9.563 * w + 1.85 * h - 4.676*age;
		}
	}else{
		if (isMale){
			bmr = 66 + ( 6.2 * w ) + ( 12.7 * h ) - ( 6.76 * age );
		}else{
			bmr = 655 + ( 4.35 * w ) + ( 4.7 * h ) - ( 4.7 * age );
		}
	}
	$("#txtAnswer").val(bmr.toFixed(0));
}

//
function doReport(){
	var reportStr = "";
	var roiStr = "";
	
	reportStr += "<tr><td class='lt'>The BMR(Basal Metabolic Rate) is " + bmr.toFixed(0) + ".";
		
	reportStr += "</td></tr>";
	$("table.mortgageTable tbody:first").html("").append(reportStr);
	
}


})(jQuery);