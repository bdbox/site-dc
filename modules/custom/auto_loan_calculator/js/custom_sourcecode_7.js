// JavaScript Document
var price;
var length;
var rate;
var dataString;
var price_1;
var length_1;
var rate_1;
var dataString_1;

//window load 
/*
$(window).bind("load", function(){
		price = parseFloat($("#price").val());
		length = parseFloat($("#length").val());
		rate = parseFloat($("#rate").val());
		
		dataString = 'price='+ price + '&length=' + length + '&rate=' + rate;  
		$.ajax({  
		  type: "POST",  
		  url: "auto-loan-calculator.php",  
		  data: dataString,  
		  success: function(response) {  
			$('#result_panel').html(response);  
		  }  
		});  
		return false; 
});
*/

$(document).ready(function(){
	//submit button
	$( "#calculateBtn" ).bind("click", function() {
		price = parseFloat($("#price").val());
		length = parseFloat($("#length").val());
		rate = parseFloat($("#rate").val());
		
		if ($('#addToCompare').is(':checked')){
			$('#addToCompare').attr("disabled", "disabled");
			$("#price").focus();
			return false;
		} else {
			var dataString = 'price='+ price + '&length=' + length + '&rate=' + rate;  
			//alert (dataString);return false;  
			$.ajax({  
			  type: "POST",  
			  url: "auto-loan-calculator.php",  
			  data: dataString,  
			  success: function(response) {  
				$('#result_panel').html(response);  
			  }  
			});  
			return false; 
		}  	
	});
	
	$( "#calculateBtn2" ).bind("click", function() {
		price_1 = parseFloat($("#price").val());
		length_1 = parseFloat($("#length").val());
		rate_1 = parseFloat($("#rate").val());

var dataString_1 = 'price='+ price + '&length=' + length + '&rate=' + rate + '&price_1='+ price_1 + '&length_1=' + length_1 + '&rate_1=' + rate_1;  
			//alert (dataString_1);return false;  
			$.ajax({  
			  type: "POST",  
			  url: "auto-loan-calculator2.php",  
			  data: dataString_1,  
			  success: function(response) {  
				$('#result_panel').html(response);  
			  }  
			});  
			return false; 
	});
	
	//add to compare checkbox
	$("#addToCompare").click(function(){
		if ($("#addToCompare:checked").length > 0){ 
			$("#calculateBtn").hide();
			$("#calculateBtn2").css("display", "block");
			price = parseFloat($("#price").val());
			length = parseFloat($("#length").val());
			rate = parseFloat($("#rate").val());
			$("#price").select();
		} else {
			$("#calculateBtn2").hide();
			$("#calculateBtn").show();
		}
	});



//chart 1 line	
		var chart;
			chart = new Highcharts.Chart({
				chart: {
					renderTo: 'container',
					//zoomType: 'x',
					defaultSeriesType: 'spline'
				},
				title: {
					text: 'Monthly Loan Payment'
				},
				subtitle: {
					text: 'Total ' + 36 + ' payments'
				},
				credits: {
					text: 'DailyCalculators.com',
					href: 'http://www.dailycalculators.com'
				},
				xAxis: {
					title: {
						text: 'Month'	
					}
				},
				yAxis: {
					title: {
						text: 'Payment ($)'
					},
					min: 0,
					minorGridLineWidth: 1, 
					gridLineWidth: 1,
					alternateGridColor: null					
				},
				tooltip: {
					formatter: function() {
			                return (this.series.name) + '<br/>The No. ' + (this.x+1)  + ' Payment: $'+ this.y ;
					}
				},
				plotOptions: {
					spline: {
						lineWidth: 4,
						states: {
							hover: {
								lineWidth: 5
							}
						},
						marker: {
							enabled: false,
							states: {
								hover: {
									enabled: true,
									symbol: 'circle',
									radius: 5,
									lineWidth: 1
								}
							}	
						}
					}
				},
				series: [{
					name: 'Monthly Interest Payment',
					data: [31.67, 30.81, 29.95, 29.1, 28.24, 27.38, 26.51, 25.65, 24.78, 23.92, 23.05, 22.18, 21.31, 20.44, 19.57, 18.69, 17.82, 16.94, 16.06, 15.18, 14.3, 13.41, 12.53, 11.64, 10.76, 9.87, 8.98, 8.09, 7.19, 6.3, 5.4, 4.51, 3.61, 2.71, 1.81, 0.9]
			
				}, {
					name: 'Monthly Principal Payment',
					data: [540.31, 541.17, 542.02, 542.88, 543.74, 544.6, 545.47, 546.33, 547.19, 548.06, 548.93, 549.8, 550.67, 551.54, 552.41, 553.29, 554.16, 555.04, 555.92, 556.8, 557.68, 558.56, 559.45, 560.34, 561.22, 562.11, 563, 563.89, 564.79, 565.68, 566.58, 567.47, 568.37, 569.27, 570.17, 571.07]
				}]
				,
				navigation: {
					menuItemStyle: {
						fontSize: '10px'
					}
				}
			});



//chart 2 PIE
		var chart2;
			chart2 = new Highcharts.Chart({
				chart: {
					renderTo: 'pie-container',
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false
				},
				title: {
					text: 'Principal vs Interest'
				},
				subtitle: {
					text: 'Total ' + 36 + ' payments'
				},
				credits: {
					text: 'DailyCalculators.com',
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
							enabled: true,
							color: '#000000',
							distance: 0,
							connectorColor: '#000000',
							formatter: function() {
								return '<b>'+ this.point.name +'</b>: <br>'+ Math.round(this.percentage*100)/100 +' %';
							}
						},
						showInLegend: true
					}
				},
				    series: [{
					type: 'pie',
					name: 'Principal/Interest Percentage',
					data: [
						['Principal',   20000],
						{name:'Interest',       y:591.24, sliced: true, selected: true}
					]
				}]
			});
			
			
});//ready
