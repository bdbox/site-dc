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

	//commas
	$(".textBox" , ".panel2").each(function(){
		$(this).blur(function(){
			$(this).val(addCommas($(this).val()));					  
		});												
	});

	//
	$(".textBox", ".panel2").keyup(function(){
		if (validate()) {
			getData();
			calculate();	
		}
	});
	
		

		
});//ready

function getData(){
	txtA = new Array();
	txtB = new Array();
	
	for (var i=1; i<=4; i++){
		txtA.push(removeCommas($("#txtA" + i).val()));	
		txtB.push(removeCommas($("#txtB" + i).val()));	
	}
	
}

function validate(){
	var isGoodForm = true;
	
	$(".textBox" , ".panel2").each(function(n){
		if (isNaN(removeCommas($(this).val()))) {
			isGoodForm = false;
			$(this).css("color", "red");
			$(this).parent().next().children(":first").val(" ");
			$(this).parent().next().next().html(" ");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else {
			$(this).css("color", "#000");
		}
		
	});
	
	return isGoodForm;
}//validate


function removeCommas(a) {
    var b = a.replace(/,/g, "");
    return b
}

function addCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
function calculate(){ 
	//
	$("#txtAnswer1").val(' ');
	$("#txtAnswer2").val('  ');
	$("#txtAnswer3").val(' ');
	$("#txtAnswer4").val(' ');
	
	txtAnswer= new Array();
	if (txtA[0] && txtB[0])
		txtAnswer.push(Math.round(txtA[0] / 100 * txtB[0] *1000000) / 1000000);
	else 
		txtAnswer.push("");
		
	if (txtA[1] && txtB[1])
		txtAnswer.push(Math.round(txtA[1] / txtB[1] * 1000000) / 10000);
	else 
		txtAnswer.push("");
		
	if (txtA[2] && txtB[2])
		txtAnswer.push(Math.round(txtA[2] / txtB[2] * 100 * 10000) / 10000);
	else 
		txtAnswer.push("");
		
	if (txtA[3] && txtB[3])
		txtAnswer.push(Math.round((txtB[3] - txtA[3]) / txtA[3] * 1000000) / 10000);
	else 
		txtAnswer.push("");
	
	
	if (txtAnswer[0]){
		$("#txtAnswer1").val('').val(txtAnswer[0]);
		$("#note1").html(txtB[0] + " * " + txtA[0] + "% = " + txtAnswer[0]);	
	} else {
		$("#txtAnswer1").val('');
		$("#note1").html("");
	}
	
	if (txtAnswer[1] && txtAnswer[1] != Infinity){
		$("#txtAnswer2").val('').val(txtAnswer[1] + "%");
		$("#note2").html(txtA[1] + " / " + txtB[1] + " = " + txtAnswer[1] + "%");	
	} else {
		$("#txtAnswer2").val('');
		$("#note2").html("");
	}
	
	if (txtAnswer[2] && txtAnswer[2] != Infinity){
		$("#txtAnswer3").val('').val(txtAnswer[2]);
		$("#note3").html(txtA[2] + " / " + txtB[2] + "% = " + txtAnswer[2]);	
	} else {
		$("#txtAnswer3").val('');
		$("#note3").html("");
	}
	
	if ((txtAnswer[3] && txtAnswer[3] != Infinity) || txtAnswer[3] === 0){
		$("#txtAnswer4").val('').val(txtAnswer[3] + "%");
		$("#note4").html("(" + txtB[3] + " - " + txtA[3] + ") / " + txtA[3] + " = " + txtAnswer[3] + "%");	
	} else {
		$("#txtAnswer4").val('');
		$("#note4").html("");
	}

}


})(jQuery);


