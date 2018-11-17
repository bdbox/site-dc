var begin_deposit=new Array();
var end_deposit=new Array();
var reg_deposit=new Array();
var circle, deposit, rate, term, regular_pay;
var regular_term = 12;
var compound = 12;

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
	regular_pay = parseFloat(removeCommas($("#txtRegular").val()));
	regular_term = $("#selectRegular").val();

	//alert("compound=" + compound + " regular_term=" + regular_term + "compound - regular_term = " + (compound - regular_term) );
}

function validate(){
	var isGoodForm = true;

	//$(":text" , ".panel2").not("#txtAnswer").each(function(n){
	$("input:text:not('#txtAnswer')" , ".panel2").each(function(n){
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
	//t_interest = (deposit*Math.pow((1+rate/compound), compound*term) - deposit).toFixed(2);
	circle = (compound-regular_term > 0)? compound : regular_term;
	if (compound == regular_term){
		for (var i=0; i<circle*term; i++){
			if (i<=0)
				begin_deposit[i] = deposit;
			else
				begin_deposit[i] = end_deposit[i-1];

			end_deposit[i] = (begin_deposit[i]+regular_pay)*Math.pow((1+rate/compound), 1);
			reg_deposit[i] = regular_pay;
		}
	}

	else if ((compound - regular_term) < 0){
		for (var i=0; i<circle*term; i++){
			if (i <= 0){
				begin_deposit[i] = deposit;
				end_deposit[i] = begin_deposit[i] + regular_pay;
			}else{
				begin_deposit[i] = end_deposit[i-1];

				if ((i+1)%(regular_term/compound) == 0)
					end_deposit[i] = begin_deposit[i-regular_term/compound+1]*(1+rate/compound) + regular_pay*rFact(regular_term/compound)*(rate/regular_term) + regular_pay*regular_term/compound;
				else
					end_deposit[i] = begin_deposit[i] + regular_pay;

			}
			reg_deposit[i] = regular_pay;
		}
	}

	else if ((compound - regular_term) > 0){
		for (var i=0; i<circle*term; i++){
			if (i <= 0){
				begin_deposit[i] = deposit;
				end_deposit[i] = (begin_deposit[i]+regular_pay)*Math.pow((1+rate/compound), 1);
				reg_deposit[i] = regular_pay;
			}else{
				begin_deposit[i] = end_deposit[i-1];

				if (i%(compound/regular_term) == 0)
					end_deposit[i] = (begin_deposit[i]+regular_pay)*Math.pow((1+rate/compound), 1);
				else
					end_deposit[i] = begin_deposit[i]*Math.pow((1+rate/compound), 1);

				reg_deposit[i] = (i%(compound/regular_term) == 0)?regular_pay:0;
			}

		}
	}

	$("#txtAnswer").val(addCommas(end_deposit[circle*term-1].toFixed(2)));
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
		for (var i=0; i<circle*term; i++){
			if (i%2 > 0)
				reportStr += "<tr class='odd'>";
			else
				reportStr += "<tr class='even'>";

			var temp = deposit*Math.pow((1+rate/compound), i);
			ta.push(temp);
			var temp2 = temp-(i>1?ta[i-2]:deposit);

			reportStr += "<td class='lt'>" + (i+1) + "</td><td>$" + addCommas(begin_deposit[i].toFixed(2)) + "</td><td>$" + addCommas(reg_deposit[i]) + "</td><td>$" + addCommas((end_deposit[i]-begin_deposit[i]-reg_deposit[i]).toFixed(2)) + "</td><td>$" + 	addCommas(end_deposit[i].toFixed(2)) + "</td></tr>";
		}

		roiStr += "Total amount of investment: $" + addCommas((deposit + regular_pay*(regular_term*term)).toFixed(2));
		roiStr += "<br />Total interest earned: $"  +  addCommas((end_deposit[end_deposit.length-1] - (deposit + regular_pay*(regular_term*term))).toFixed(2));

		roiStr += "<br />ROI is " + ((end_deposit[end_deposit.length-1] - (deposit + regular_pay*(regular_term*term)))/(deposit + regular_pay*(regular_term*term))*100).toFixed(2) + "%";
		//roiStr += "<br />APR (Annual Percentage Rate) is " + ((Math.pow((1+rate/compound), compound)-1)*100).toFixed(2) + "%";
		$("table.mortgageTable tbody:first").html("").append(reportStr);
		$(".reportDiv .summary").html(roiStr);

		//
		if (circle == 12){
			$("#compounds").html("Month");
		}else if (circle == 4){
			$("#compounds").html("Quarter");
		}else if (circle == 2){
			$("#compounds").html("Half Year");
		}
	}
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
      backgroundColor: 'rgba(255, 255, 255, 1	)',
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
			backgroundColor: null,
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
				['Investment',       deposit + regular_pay*(regular_term*term)],
				{
					name: 'Return',
					y: end_deposit[end_deposit.length-1] - (deposit + regular_pay*(regular_term*term)),
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


function rFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval + i;
    return rval;
}
