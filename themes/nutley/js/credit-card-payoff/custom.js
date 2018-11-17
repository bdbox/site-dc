var loan, rate, emi, monthpay, term, termY, termM, t_interest, isMonth = false;


(function($) {

$(document).ready(function(){

	//
	$("#txtEMIBox").bind("click", function(){
		$(this).removeClass("grayout");
		$("#txtMonthBox").addClass("grayout");
		$("#mainLabel").html("# of month: ").css({"marginLeft": "0px", "display" : "inline-block"});
		isMonth = false;
	});



	//
	$("#txtEMI").bind({
		keyup: function(){
					var temp = (removeCommas($(this).val())/removeCommas($("#txtLoan").val())*100).toFixed(2);
					if (temp >0 || temp <= 0)
						$("#pay-percent").html(temp + "% of total balance");
					else
						$("#pay-percent").html("");
				}
	});

	//commas
	$(":text" , ".panel2").each(function(){
		$(this).blur(function(){
			$(this).val(addCommas($(this).val()));
		});
	});

	//
	$("#txtMonthBox").bind({
		click: function(){
					$(this).removeClass("grayout");
					$("#txtEMIBox").addClass("grayout");
					$("#mainLabel").html("Monthly payment: ");
					isMonth = true;
				}
	});

	//all textbox
	$(":text").each(function(){
		$(this).click(function(){
			$(this).focus().select();
		});
	});

	//
	$("#calculateBtn").click(function(){
		if (validate()) {
			getData();
			calculate();
			doReport();
			chart = new Highcharts.Chart(getChartOptions());
		}
	});


});//ready

function getData(){
	loan = parseFloat(removeCommas($("#txtLoan").val()));
	rate = parseFloat($("#txtRate").val())/100;
	if (isMonth)
		term = parseFloat($("#txtMonth").val());
	else
		emi = parseFloat(removeCommas($("#txtEMI").val()));
}

function validate(){
	var isGoodForm = true;

	$("input:text" , ".panel2").not("#txtAnswer").each(function(n){
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

function calculate(){
	if (isMonth) {
		monthpay = loan * (rate/12/(1 - Math.pow((1+rate/12), (-term))));
		t_interest = monthpay*term - loan;
		term = Math.ceil(term);
		termY = Math.floor(term/12);
		termM = term - termY*12;
		monthpay = Math.round(monthpay*100)/100;
		$("#txtAnswer").val(addCommas(monthpay.toFixed(2)));
	} else {
		term = Math.log(emi/(emi - loan * rate/12)) / Math.log(1 + rate/12);
		t_interest = (emi * term - loan);
		term = Math.ceil(term);
		termY = Math.floor(term/12);
		termM = term - termY*12;
		$("#txtAnswer").val(term);
	}
}

function removeCommas(a) {
    var b = a.replace(/,/g, "");
    return b
}

function addCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
  
//
function doReport(){
	var reportStr = "";
	if (isMonth) {
		reportStr += "<tr><td class='lt'>Your monthly payment will be $" + addCommas(monthpay.toFixed(2)) + " in order to payoff debt in " + term + " months (" + termY + " years " + termM + " months).<br />";
		reportStr += "Total principle is $" + addCommas(loan) + ".<br />";
		reportStr += "Total interest is $" + addCommas(Math.round(t_interest*100)/100) + ".";
	} else {
		reportStr += "<tr><td class='lt'>It will take " + term + " months (That is " + termY + " years " + termM + " months) to pay off the loan.<br />";
		reportStr += "Total principle is $" + addCommas(loan) + ".<br />";
		reportStr += "Total interest is $" + addCommas(Math.round(t_interest*100)/100) + ".";
	}
	$("table.mortgageTable tbody:first").html("").append(reportStr);

}
})(jQuery);
//chart theme
/**
 * Grid theme for Highcharts JS
 * @author Torstein H�nsi
 */
Highcharts.theme = {};
Highcharts.theme = {
   colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
   chart: {

      borderWidth: 0,
	  borderRadius: 8,
      backgroundColor: 'rgba(255, 255, 255, .0	)',
      plotShadow: true,
      plotBorderWidth: 1
   },
   title: {
      style: {
         color: '#000',
         font: 'bold 11px "Trebuchet MS", Verdana, sans-serif'
      }
   },
   subtitle: {
      style: {
         color: '#666666',
         font: 'bold 10px "Trebuchet MS", Verdana, sans-serif'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      lineColor: '#000',
      tickColor: '#000',
      labels: {
         style: {
            color: '#000',
            font: '10px Trebuchet MS, Verdana, sans-serif'
         }
      },
      title: {
         style: {
            color: '#333',
            fontWeight: 'bold',
            fontSize: '10px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'

         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      lineColor: '#000',
      lineWidth: 1,
      tickWidth: 1,
      tickColor: '#000',
      labels: {
         style: {
            color: '#000',
            font: '10px Trebuchet MS, Verdana, sans-serif'
         }
      },
      title: {
         style: {
            color: '#333',
            fontWeight: 'bold',
            fontSize: '10px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
         }
      }
   },
   legend: {
      itemStyle: {
         font: '10px Trebuchet MS, Verdana, sans-serif',
         color: 'black'

      },
      itemHoverStyle: {
         color: '#039'
      },
      itemHiddenStyle: {
         color: 'gray'
      }
   },
   labels: {
      style: {
         color: '#99b'
      }
   }
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

var chart, chartOptions;

function getChartOptions(){
	chartOptions = {
		chart: {
			renderTo: 'chart_div',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Principal vs Interest'
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
			name: 'Principal vs Interest',
			data: [
				['Principal',       loan||91.45],
				{
					name: 'Interest',
					y: t_interest||8.55,
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
