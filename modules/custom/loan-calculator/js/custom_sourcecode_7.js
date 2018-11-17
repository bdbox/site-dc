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
		  url: "loan-calculator.php",  
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
			  url: "loan-calculator.php",  
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
			  url: "loan-calculator2.php",  
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
					text: 'Total ' + 60 + ' payments'
				},
				credits: {
					text: '',
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
					data: [175, 172.33, 169.65, 166.96, 164.26, 161.56, 158.84, 156.12, 153.4, 150.66, 147.92, 145.16, 142.4, 139.63, 136.86, 134.07, 131.28, 128.48, 125.67, 122.85, 120.03, 117.2, 114.35, 111.5, 108.65, 105.78, 102.9, 100.02, 97.13, 94.23, 91.32, 88.4, 85.48, 82.54, 79.6, 76.65, 73.69, 70.72, 67.74, 64.76, 61.76, 58.76, 55.75, 52.73, 49.7, 46.66, 43.61, 40.55, 37.49, 34.41, 31.33, 28.24, 25.14, 22.03, 18.91, 15.78, 12.64, 9.5, 6.34, 3.17]
			
				}, {
					name: 'Monthly Principal Payment',
					data: [916.5, 919.18, 921.86, 924.55, 927.24, 929.95, 932.66, 935.38, 938.11, 940.85, 943.59, 946.34, 949.1, 951.87, 954.65, 957.43, 960.22, 963.02, 965.83, 968.65, 971.48, 974.31, 977.15, 980, 982.86, 985.73, 988.6, 991.48, 994.38, 997.28, 1000.18, 1003.1, 1006.03, 1008.96, 1011.9, 1014.86, 1017.82, 1020.78, 1023.76, 1026.75, 1029.74, 1032.75, 1035.76, 1038.78, 1041.81, 1044.85, 1047.89, 1050.95, 1054.02, 1057.09, 1060.17, 1063.27, 1066.37, 1069.48, 1072.6, 1075.73, 1078.86, 1082.01, 1085.17, 1088.33]
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
					text: 'Total ' + 60 + ' payments'
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
						['Principal',   60000],
						{name:'Interest',       y:5490.28, sliced: true, selected: true}
					]
				}]
			});




});//ready