var deposit, rate, term, term1, term2, t_interest, compound = 1, duration;
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
	$("#txtDeposit" , ".panel2").each(function(){
		$(this).blur(function(){
			$(this).val(addCommas($(this).val()));					  
		});												
	});

	//
	$("#calculateBtn").click(function(){
		if (validate()) {
			getData();
			calculate();	
			if (term >1000){
				if (confirm("It may take a while to generate the report, are you sure you're going to preceed?"))
					doReport();
				else
					return;
			}else {
				doReport();
			}
			chart = new Highcharts.Chart(getChartOptions());
		}
	});
	
	//on page load
	if (validate()) {
			getData();
			calculate();	
			doReport();
			chart = new Highcharts.Chart(getChartOptions());
		}
		
	//datepicker
	$("#txtPresentDate").datepicker({
	    changeMonth: true,
	    changeYear: true,
		minDate: 0,
		onSelect: function(dateText, inst) {
		   var actualDate = new Date(dateText);
		   var newDate = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate()+1);
			$('#txtFutureDate').datepicker('option', 'minDate', newDate );
		}
	});
	$("#txtFutureDate").datepicker({
      changeMonth: true,
      changeYear: true
    });
	

		
});//ready

function getData(){
	deposit = parseFloat(removeCommas($("#txtDeposit").val()));	
	rate = parseFloat($("#txtRate").val())/100;	
	term1 = new Date($("#txtPresentDate").val());	
	term2 = new Date($("#txtFutureDate").val());	
	var leapDays = Date.leapYearDaysBetween(term1, term2);
	console.log("leapdays = " + leapDays);
	
	term = Math.round(Math.abs(term2 - term1)/86400000) - leapDays + 1;
	duration = "Duration covered: " + ((Math.floor(term/365) > 0 ? (Math.floor(term/365) + " years and ") : "")) + term%365 + " days.";
	compound = $("#selectCompound").val();
}

function validate(){
	var isGoodForm = true;
	
	$("#txtDeposit, #txtRate" , ".panel2").each(function(n){
		if (isNaN(removeCommas($(this).val()))) {
			isGoodForm = false;
			$(this).css("color", "red");
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
	if (compound == 12){
		term = term/30;
	}else if (compound == 4){
		term = term/91.25;
	}else if (compound == 2){
		term = term/182.5;
	}else if (compound == 52){
		term = term/7;
	}else if (compound == 1){
		term = term/365;
	}else if (compound == 365){
		term = term/1;
	}
	console.log("term = " + term);
	
	t_interest = (deposit*Math.pow((1+rate/compound), term)).toFixed(2);
	$("#txtAnswer").val(addCommas(t_interest));
}

//
function doReport(){
	var reportStr = "";
	var roiStr = duration + "<br />";
	var ta = new Array();
	var beginningDeposit = deposit;
	if (term > 0) {
		
		for (var i=1; i<=Math.ceil(term); i++){
			if (i%2 > 0)
				reportStr += "<tr class='odd'>";
			else
				reportStr += "<tr class='even'>";
			
			var temp = deposit*Math.pow((1+rate/compound), i);
			ta.push(temp);
			var temp2 = temp-(i>1?ta[i-2]:deposit);
			
			if (i == Math.ceil(term)) {
				reportStr += "<td class='lt'>" + i + "</td><td>$" + addCommas(beginningDeposit.toFixed(2)) + "</td><td>$" + addCommas((t_interest + deposit - beginningDeposit).toFixed(2)) + "</td><td>$" + addCommas((t_interest-deposit).toFixed(2)) + "</td><td>$" + 	addCommas(t_interest) + "</td></tr>";
			} else {
				reportStr += "<td class='lt'>" + i + "</td><td>$" + addCommas(beginningDeposit.toFixed(2)) + "</td><td>$" + addCommas(temp2.toFixed(2)) + "</td><td>$" + addCommas((temp - deposit).toFixed(2)) + "</td><td>$" + 	addCommas(temp.toFixed(2)) + "</td></tr>";
			}
			beginningDeposit = temp;
		}
		roiStr += "ROI(return on investment) is " + ((deposit*Math.pow((1+rate/compound), compound*term) - deposit)/deposit*100).toFixed(2) + "%";
		roiStr += "<br />APR (Annual Percentage Rate) is " + ((Math.pow((1+rate/compound), compound)-1)*100).toFixed(2) + "%";
		roiStr += "<br />Future value is $" + addCommas(t_interest) + ".";
		$("table.mortgageTable tbody:first").html("").append(reportStr);
		$(".reportDiv .summary").html(roiStr);
		
	}
}

Date.prototype.isLeapYear = function(utc) {
    var y = utc ? this.getUTCFullYear() : this.getFullYear();
    return !(y % 4) && (y % 100) || !(y % 400);
};

Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
    
  // Convert back to days and return
  return Math.round(Math.abs((date1-date2)/one_day)); 
};

Date.leapYearDaysBetween = function(date1, date2) {
	var year1 = date1.getFullYear();
	var year2 = date2.getFullYear();
	var count = 0;
	
	if (year1 ==  year2){
		if (date1.isLeapYear()){
			var tempDate = new Date("2/29/" + year1);
			if ((tempDate >= date1) || (tempDate <= date2))
				count++;
			}
	} else {
		for (var i = year1; i<= year2; i++){
			if (!(i % 4) && (i % 100) || !(i % 400)){
				var tempDate = new Date("2/29/" + i);
				if ((tempDate >= date1) || (tempDate <= date2))
					count++;
			}
		}
	}
	
   return count;
};
})(jQuery);

//chart theme
/**
 * Grid theme for Highcharts JS
 * @author Torstein H鴑si
 */


var chart, chartOptions;

function getChartOptions(){
	chartOptions = {
		chart: {
			renderTo: 'chart_div',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			backgroundColor: 'rgba(255, 255, 255, .0	)'
		},
		title: {
			text: 'Investment vs Return'
		},
		credits: {
			text: '',
			href: 'http://www.dailycalculators.com'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage*100)/100 +' %';
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
		exporting: {
			enabled:false	
		},
		series: [{
			type: 'pie',
			name: 'Investment vs Return',
			data: [
				['Investment',       deposit],
				{
					name: 'Return',
					y: deposit*Math.pow((1+rate/compound), term) - deposit,
					sliced: true,
					selected: true
				}
			]
		}]
	};
	return chartOptions;	
}

//chart
(function($){ // encapsulate jQuery

$(document).ready(function() {
	
	chart = new Highcharts.Chart(getChartOptions());
});

})(jQuery);

