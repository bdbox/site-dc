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
	
	$("#txtRoman").keyup(function(){
		$(this).val($(this).val().toUpperCase());							  
	});

	
	//
	$("#calculateBtn").click(function(){
		calculate();	
	});
	


		
});//ready

var roman, alpha;
var r1, r2, reportStr;

function getData(){
	roman = $("#txtRoman").val();
	alpha = parseFloat($("#txtAlpha").val());
}

function validate(){
	var isGoodForm = true;
	
	if (!isInt($("#txtAlpha").val()) && $("#txtAlpha").val() != "") {
		isGoodForm = false;
		$("#txtAlpha").css("color", "red");
		$("#err-msg").html("Please enter an integer.").show().delay(3000).fadeOut(1000);
	} else {
		$("#txtAlpha").css("color", "#000");
	}
		
	if (!isRoman($("#txtRoman").val()) && $("#txtRoman").val() != "") {
		isGoodForm = false;
		$("#txtRoman").css("color", "red");
		$("#err-msg").html("Please enter a roman number.").show().delay(3000).fadeOut(1000);
	} else {
		$("#txtRoman").css("color", "#000");
	}
		
	
	return isGoodForm;
}//validate

function calculate(){ 
	getData();
	if (isInt(alpha) && alpha <= 4999){
		r2 = romanize(alpha);
		if (r2)
			$("#txtR2").html(" = " + r2);
		else if (r2 == 0)
			$("#txtR2").html(" = nulla");
		else
			$("#txtR2").html("Please enter a valid number.");
	}else
			$("#txtR2").html("Please enter a valid number.");
	
	r1 = deromanize(roman);
	if (r1 > 0 && r1 < 5000)
		$("#txtR1").html(" = " + r1);
	else
		$("#txtR1").html("Please enter a valid roman number");
	

}

//
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
//
function deromanize(str) {
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		num += key[m[0]];
  console.log(num);
	return num;
}
//
function isInt(value) { 
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10)); 
}
//
function isRoman(value) {
    var r = /(^[0-9]{4}$)|(^(?:(?:[X]{0,2}(?:[I](?:[XV]?|[I]{0,2})?|(?:[V][I]{0,3})?))|(?:[X]{3}[I]{0,3}))\-[A-Z]{2}$)/ig;
    return value.match(r);
}

})(jQuery);


