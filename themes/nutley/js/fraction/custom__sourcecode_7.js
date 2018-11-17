var a, b, c, x, y, z, op = "add";
var r = new Array();

jQuery.noConflict();
(function($) {

$(document).ready(function(){
	//operation
	$("#operation").change(function(){
		if ($(this).val() == "add")
			op = "add";
		else if ($(this).val() == "subtract")
			op = "subtract";
		else if ($(this).val() == "multiply")
			op = "multiply";
		else if ($(this).val() == "divide")
			op = "divide";
	});
	
	//all textbox
	$(":text").each(function(){
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
		a = parseInt($("#ta").val());
		b = parseInt($("#tb").val());
		c = parseInt($("#tc").val());
		x = parseInt($("#tx").val());
		y = parseInt($("#ty").val());
		z = parseInt($("#tz").val());
}

function validate(){
	var isGoodForm = true;
	
	$(":text" , ".panel2").each(function(n){
		if (isNaN($(this).val())) {
			isGoodForm = false;
			$(this).css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else if($("#tz").val() == 0){
			isGoodForm = false;
			$("#tz").css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		}  else if($("#tc").val() == 0){
			isGoodForm = false;
			$("#tc").css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else if ($("#tx").val() == 0 && $("#ty").val() == 0 && op == "divide"  ){ 
			isGoodForm = false;
			$("#tx").css("color", "red");
			$("#ty").css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else {
			$(this).css("color", "#000");
		}
		
	});
	
	return isGoodForm;
}//validate

function calculate(){ 
	r = new Array();
	if (a > 0)
		b += a*c;
	if (x > 0)
		y += x*z;
	
	if (op == "add"){
		r.push(b*z + y*c);
		r.push(c*z);
		r = reduce(r[0], r[1]);
	} else if (op == "subtract"){
		r.push(b*z - y*c);
		r.push(c*z);
		r = reduce(r[0], r[1]);
	} else if (op == "multiply") {
		r.push(b*y);
		r.push(c*z);
		r = reduce(r[0], r[1]);
	} else if (op == "divide"){
		r.push(b*z);
		r.push(c*y);
		r = reduce(r[0], r[1]);
	}
}

//
function doReport(){
	var reportStr = "";
	var roiStr = "";
	var t = formatter(r);
		
	reportStr += "<tr><td class='lt'>Result is <span>" + t[3] + t[0] + "</span>";
	reportStr +=  "<div class='fraction'><span class='fup'>" + t[1] + "</span><span class='bar'>/</span><span class='fdn'>" + t[2] + "</span>" ;
		
	reportStr += "</td></tr>";
	$("table.mortgageTable tbody:first").html("").append(reportStr);
	
}
//
function formatter(arr){
	var sign;
	var f = new Array();
	if (arr[0] <0){
		sign = "-";	
	}
	if (Math.abs(arr[0]) > arr[1]){
		f.push(Math.floor(arr[0]/arr[1]));
		f.push(arr[0] % arr[1]);
		f.push(arr[1]);
	} else {
		f.push("");
		f.push(arr[0]);
		f.push(arr[1]);
	}

	if (sign) {
		f.push(sign);
		return f;
	} else {
		f.push("");
		return f;
	}
}

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}

})(jQuery);
