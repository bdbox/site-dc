var deposit, rate, term, t_interest, compound = 1;
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
	deposit = parseFloat(removeCommas($("#txtDeposit").val()));	
	rate = parseFloat($("#txtRate").val())/100;	
	term = parseFloat($("#txtTerm").val());	
	compound = $("#selectCompound").val();
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
	t_interest = (deposit*Math.pow((1+rate/compound), compound*term) - deposit).toFixed(2);
	$("#txtAnswer").val(addCommas(t_interest));
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
	var roiStr = "";
	var ta = new Array();
	var beginningDeposit = deposit;
	if (term > 0) {
		for (var i=1; i<=term*compound; i++){
			if (i%2 > 0)
				reportStr += "<tr class='odd'>";
			else
				reportStr += "<tr class='even'>";
			
			var temp = deposit*Math.pow((1+rate/compound), i);
			ta.push(temp);
			var temp2 = temp-(i>1?ta[i-2]:deposit);
			
			reportStr += "<td class='lt'>" + i + "</td><td>$" + addCommas(beginningDeposit.toFixed(2)) + "</td><td>$" + addCommas(temp2.toFixed(2)) + "</td><td>$" + addCommas((temp - deposit).toFixed(2)) + "</td><td>$" + 	addCommas(temp.toFixed(2)) + "</td></tr>";
			beginningDeposit = temp;
		}
		roiStr += "ROI(return on investment) is " + ((deposit*Math.pow((1+rate/compound), compound*term) - deposit)/deposit*100).toFixed(2) + "%";
		roiStr += "<br />Annual ROI is " + ((deposit*Math.pow((1+rate/compound), compound*term) - deposit)/deposit/term*100).toFixed(2) + "%";
		roiStr += "<br />APR (Annual Percentage Rate) is " + ((Math.pow((1+rate/compound), compound)-1)*100).toFixed(2) + "%";
		$("table.mortgageTable tbody:first").html("").append(reportStr);
		$(".reportDiv .summary").html(roiStr);
		
		//
		if (compound == 12){
			$("#compounds").html("Month");	
		}else if (compound == 4){
			$("#compounds").html("Quarter");	
		}else if (compound == 2){
			$("#compounds").html("Half Year");	
		}else if (compound == 52){
			$("#compounds").html("Week");	
		}else if (compound == 365){
			$("#compounds").html("Day");	
		}
	}
}
})(jQuery);

//chart theme
/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */
Highcharts.theme = {};
Highcharts.theme = {
   colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
   chart: {
      
      borderWidth: 0,
	  borderRadius: 0,
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

var chart, chart2, chartOptions;

function getChartOptions(){
	chartOptions = {
		chart: {
			renderTo: 'chart_div',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
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
					y: deposit*Math.pow((1+rate/compound), compound*term) - deposit,
					sliced: true,
					selected: true
				}
			]
		}]
	};
	return chartOptions;	
}


function getChartOptions2(){
	chartOptions = {
		chart: {
				renderTo: 'interest-container',
                type: 'line',
                marginRight: 130,
                marginBottom: 45
            },
			credits: {
				text: '',
				href: 'http://www.dailycalculators.com'
			},
            title: {
                text: 'Simple interest vs Compound interest',
                x: -20 //center
            },
            tooltip: {
                formatter: function(i) {
					return 'Year ' + this.x + '<br /><b>'+ this.series.name +'</b>: $'+ addCommas(this.y.toFixed(2));
				}
            },
            xAxis: {
				title: {
					text: 'Year'
				},
                categories: ['1', '2', '3', '4', '5', '6',
                    '7', '8', '9', '10']
            },
            yAxis: {
                title: {
                    text: 'interest ($)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Simple interest',
                data: [800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200, 8000]
            }, {
                name: 'Compound interest',
                data: [800, 1664, 2597.12, 3604.89, 4693.28, 5868.74, 7138.24, 8509.30, 9990.05, 11589.25]
            }]
	};
	return chartOptions;
}



//chart
(function($){ // encapsulate jQuery

$(document).ready(function() {
	
	chart = new Highcharts.Chart(getChartOptions());
	chart2 = new Highcharts.Chart(getChartOptions2());
});

})(jQuery);

