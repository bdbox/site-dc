var txtA=[], txtB=[], txtAnswer=[];
jQuery.noConflict();
(function($) {

$(document).ready(function(){
	
	//all textbox
	$(":text").each(function(){
		$(this).click(function(){
			$(this).focus().select();					   
		});
	});

	
	//
	$("#calculateBtn").click(function(){
		if (validate()){
			calculate();	
		}
	});
	


		
});//ready

var f1, f2, f3,d;
var r1, r2, reportStr;

function getData(){
	f1 = parseFloat($("#txtFI").val());
	f2 = parseFloat($("#txtFT").val());
	f3 = parseFloat($("#txtFB").val());
	
	d = parseFloat($("#txtDecimal").val());
}

function validate(){
	var isGoodForm = true;
	
	$("input", ".panel2").each(function(n){
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
	getData();
	reportStr = "";
	
	if ((!isNaN(f1)||!isNaN(f2)||!isNaN(f3))&&(f3 != 0)){
		if (f1){
			if (f2/f3){
				r1 = f1 + (f2/f3);
			} else {
				r1 = f1;
			}
		} else {
			if (f2/f3){
				r1 = (f2/f3);
			} else {
				r1 = "";
			}
		}
		$("#txtR1").html(" = " + r1);
	}
	
	if (!isNaN(d)){
		if (isInt(d)){
			r2 = d;	
		} else {
			r2 = dec2Frac(d);
		}
		console.log(r2);
		$("#txtR2").html(" = " + r2);
	}
	

}





function gcd(a, b) {
    return (b) ? gcd(b, a % b) : a;
}
function dec2Frac(num) {
	var top = num.toString().replace(/\d+[.]/, '');
	console.log(top);
	var bot = Math.pow(10, top.length);
	if (num > 1) {
		top = +top + Math.floor(num) * bot;
	}
	var x = gcd(top, bot);
	return (top / x) + "/" + (bot / x);
};

//
function isInt(value) { 
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10)); 
}

})(jQuery);


