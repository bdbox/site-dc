var h, w, age, bmr, isMetric = false, isMale = false;
var isSum = true;
var cost, salvage, life, depreciation, da=new Array();
jQuery.noConflict();
(function($) {

$(document).ready(function(){
	
	//radio buttons
	$("input:radio[name='radio1']").each(function(n){
		$(this).click(function(){
			if (n==0) {
				isSum = false;
			} else {
				isSum = true;
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
	cost = parseFloat($("#txtCost").val());
	salvage = parseFloat($("#txtSalvage").val());
	life = Math.round(parseFloat($("#txtLife").val()));
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
	if (isSum){
		var s = sum(life);
		for (var i=0; i<life; i++){
			da.push((cost - salvage)*(life-i)/s);	
		}
		
	}else{
		depreciation = Math.round((cost - salvage)/life*100)/100;
	}
}

//
function sum(n){
	var s = 0;
	for (var i=1; i<=n; i++){
		s += i;	
	}
	return s;
}

//
function addCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

//
function doReport(){
	var reportStr = "";
	var roiStr = "";
	
	if (isSum){
		for (var i=0; i<life; i++){
			reportStr += "<tr><td width='60%' class='lt'>";
			reportStr += "第" + (i+1) + "年的折旧</td>";
			reportStr += "<td width='40%' class='lt'>￥" + addCommas(da[i].toFixed(2)) + "</td></tr>";
		}
	} else {
		reportStr += "<tr><td class='lt'>每年的折旧是￥" + depreciation + ".</td></tr>";
	}
	
	$("table.mortgageTable tbody:first").html("").append(reportStr);
	
}


})(jQuery);