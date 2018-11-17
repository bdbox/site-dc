var share, purchase, sell, buycom, sellcom, invest, profit;

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
	$(":text" , ".panel2").each(function(){
		$(this).blur(function(){
			$(this).val(addCommas($(this).val()));
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

	//on page load
	if (validate()) {
			getData();
			calculate();
			doReport();
			chart = new Highcharts.Chart(getChartOptions());
		}

});//ready

function getData(){
	share = parseFloat(removeCommas($("#txtShare").val()));
	purchase = parseFloat(removeCommas($("#txtPurchase").val()));
	sell = parseFloat(removeCommas($("#txtSell").val()));
	buycom = parseFloat(removeCommas($("#txtBuyCommission").val()));
	sellcom = parseFloat(removeCommas($("#txtSellCommission").val()));
}

function validate(){
	var isGoodForm = true;

	$(":text" , ".panel2").not("#txtAnswer").each(function(n){
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
	invest = Math.round(purchase * share * 100)/100;
	profit = Math.round(((sell - purchase) * share - buycom - sellcom) * 100) / 100;
	$("#txtAnswer").val(addCommas(profit));
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
	var reportStr = "";
	if (profit >= 0) {
		reportStr += "<tr><td class='lt'>Total purchase price is $" + addCommas(invest.toFixed(2)) + ".<br />";
		reportStr += "Total sell price is $" + addCommas(Math.round(sell*share*100)/100) + ".<br />";
		reportStr += "Total commission is $" + addCommas((sellcom + buycom).toFixed(2)) + ".<br />";
		reportStr += "Profit is $" + addCommas(profit.toFixed(2)) + ".<br />";
		reportStr += "ROI is " + Math.round(profit/invest*10000)/100 + "%.";
	} else {
		reportStr += "<tr><td class='lt'>Total purchase price is $" + addCommas(invest.toFixed(2)) + ".<br />";
		reportStr += "Total sell price is $" + addCommas(Math.round(sell*share*100)/100) + ".<br />";
		reportStr += "Total commission is $" + addCommas((sellcom + buycom).toFixed(2)) + ".<br />";
		reportStr += "Loss is <span style='color:red;'>$" + addCommas((-profit).toFixed(2)) + "</span>.<br />";
		reportStr += "ROI is " + Math.round(profit/invest*10000)/100 + "%.";
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
   colors: [ '#ED561B', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
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
			plotShadow: false,
			type: 'bar'
		},
		title: {
			text: 'Return on Investment'
		},
		credits: {
			text: '',
			href: 'http://www.dailycalculators.com'
		},
		xAxis: {
			categories: ['Trade']
		},
		yAxis: {
			title: {
				text: 'Amount'
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.series.name +'</b>: $'+ this.y;
			}
		},
		plotOptions: {
			series: {
                    stacking: 'normal'
                }
		},
		exporting: {
			enabled:false
		},
		series: [{
                name: 'Profit',
                data: [profit]
            }, {
                name: 'Invest',
                data: [invest]
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
