<div class="results-section">
<h2>Summary of loans</h2>

<?php 
//Loan 1
$price = floatval(preg_replace("/[^0-9.]*/","",$_POST["price_1"]));
$principal = $price;
$length = floatval(preg_replace("/[^0-9.]*/","",$_POST["length_1"])) ;
$rate = floatval(preg_replace("/[^0-9.]*/","",$_POST["rate_1"])) / 1200;

$monthly_interest = array();
$monthly_principal = array();

$mpayment = floatval($principal * ($rate / (1 - (pow((1 + $rate), -$length)))));
$year_interest;
$year_principal;
$year_total;
$output;

//Loan 2
$price_1 = floatval(preg_replace("/[^0-9.]*/","",$_POST["price"]));
$principal_1 = $price_1;
$length_1 = floatval(preg_replace("/[^0-9.]*/","",$_POST["length"]));
$rate_1 = floatval(preg_replace("/[^0-9.]*/","",$_POST["rate"])) / 1200;

$monthly_interest_1 = array();
$monthly_principal_1 = array();

$mpayment_1 = floatval($principal_1 * ($rate_1 / (1 - (pow((1 + $rate_1), -$length_1)))));
$year_interest_1;
$year_principal_1;
$year_total_1;
$output_1;

echo "<div class='summaryDiv'>";
?>


<?php
$summary =  "<table class='summaryTableOuter'><tr><td><table class='summaryTable' width='100%' border='0' cellspacing='0'>".
"<tr class='hd'><th width='110'></th><th width='120'>Loan 1<br />(L-1)</th><th width='120'>Loan 2<br />(L-2)</th></tr>".
"<tr class='odd'><td class='lt'>Loan amount</td><td>".number_format($price_1,2,'.',',')."</td><td>".number_format($price,2,'.',',')."</td></tr>".
"<tr class='even'><td class='lt'>Term</td><td>" . $length_1 . " months</td><td>" . $length . " months</td></tr>".
"<tr class='odd'><td class='lt'>Rate</td><td>" . $rate_1*1200 . "%</td><td>" . $rate*1200 . "%</td></tr>".
"<tr class='even'><td class='lt'><strong>Monthly payment</strong>:</td><td>$" . number_format($mpayment_1,2,'.',',') . "</td><td>$" . number_format($mpayment,2,'.',',') . "</td></tr>".
"<tr class='odd'><td class='lt'>Total Payment</td><td>$" . number_format($mpayment_1*$length_1,2,'.',',') . "</td><td>$" . number_format($mpayment*$length,2,'.',',') . "</td></tr>".
"<tr class='even'><td class='lt'>Total Principal</td><td>$" . number_format($principal_1,2,'.',',') . "</td><td>$" . number_format($principal,2,'.',',') . "</td></tr>".
"<tr><td class='lt'>Total Interest</td><td>$" . number_format($mpayment_1*$length_1-$principal_1,2,'.',',')."</td><td>$" . number_format($mpayment*$length-$principal,2,'.',',')."</td></tr>".
"</table></td></tr></table>";
echo $summary;

?>

<?php 
echo "</div><div style='clear:both;'>&nbsp;</div>"
?>
<div class="chartDiv" style="margin-top:7px;">
<div id="container"></div>
<div id="pie-container"></div>
<div class="clear"></div>
</div>


<h2>Amortization tables</h2>
<!--  Loan 1 -->
<?php
	echo "<h3 class='expand1'>Loan 1</h3><br />";
	echo "<div class='expand-div-1'>";

for ($i=1; $i<=ceil($length_1/12); $i++){
	$output_1 ="";
	$year_interest_1 = 0;
	$year_principal_1 = 0;
	$year_total_1 = 0;
	
	$output_1 .= "<div style='text-align:right;'>Year " . $i . "</div>";
	$output_1 .= "<table class='mortgageTableOuter'><tr><td><table class='mortgageTable1' width='100%' border='0' cellspacing='0'>";
	$output_1 .= "<tr><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr>";
	
	$months_in_year = 12;
	if (($i==ceil($length_1/12)) and ($length_1%12 > 0)){
		$months_in_year = $length_1%12;
	}
	
	for ($k=1; $k<=$months_in_year; $k++){
		$temp_m_interest_1 = number_format(($mpayment_1 - ($mpayment_1 * pow((1 + $rate_1), (($i-1)*12 + $k - 1 - $length_1)))),2,'.',',');
		$temp_m_principal_1 = number_format($mpayment_1 * pow((1 + $rate_1), (($i-1)*12 + $k - 1 - $length_1)),2,'.',',');
		if ($k%2 == 0)
			$output_1 .= "<tr class='even'>";
		else
			$output_1 .= "<tr class='odd'>";
		$output_1 .= "<td>" . $k . "</td><td>$" . $temp_m_interest_1 . "</td><td>$" . $temp_m_principal_1 . "</td><td>$" . number_format($mpayment_1 * ((1 - pow((1 + $rate_1),(($i-1)*12 + $k - $length_1)))/$rate_1),2,'.',',') . "</td></tr>";	
	
	$year_interest_1 += $mpayment_1 - ($mpayment_1 * pow((1 + $rate_1), (($i-1)*12 + $k - 1 - $length_1)));
	$year_principal_1 += $mpayment_1 * pow((1 + $rate_1), (($i-1)*12 + $k - 1 - $length_1));
	$year_total_1 += $mpayment_1;
	
	$a_1 = floatval(preg_replace("/[^0-9.]*/","",$temp_m_interest_1));
	array_push($monthly_interest_1, $a_1);
	$b_1 = floatval(preg_replace("/[^0-9.]*/","",$temp_m_principal_1));
	array_push($monthly_principal_1, $b_1); 
	}
	
	$output_1 .= "<tr><td colspan='4' class='summary'>Summary of Year " . $i . "<br />Total spending: " . number_format($year_total_1,2,'.',',') . "<br />Total interest: " . number_format($year_interest_1,2,'.',','). "<br />Total principal: " . number_format($year_principal_1,2,'.',',') . "</td></tr>";
	$output_1 .= "</table></td></tr></table>";
	
	echo $output_1;
	
}
echo "</div>";
?>

<!--  Loan 2 -->

<?php
	echo "<h3 class='expand2'>Loan 2</h3><br />";
	echo "<div class='expand-div-2'>";

for ($i=1; $i<=ceil($length/12); $i++){
	$output ="";
	$year_interest = 0;
	$year_principal = 0;
	$year_total = 0;
	
	$output .= "<div style='text-align:right;'>Year " . $i . "</div>";
	$output .= "<table class='mortgageTableOuter'><tr><td><table class='mortgageTable' width='100%' border='0' cellspacing='0' cellpadding='4'>";
	$output .= "<tr class='hd'><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr>";
	
	$months_in_year = 12;
	if (($i==ceil($length/12)) and ($length%12 > 0)){
		$months_in_year = $length%12;
	}
	
	for ($k=1; $k<=$months_in_year; $k++){
		$temp_m_interest = number_format(($mpayment - ($mpayment * pow((1 + $rate), (($i-1)*12 + $k - 1 - $length)))),2,'.',',');
		$temp_m_principal = number_format($mpayment * pow((1 + $rate), (($i-1)*12 + $k - 1 - $length)),2,'.',',');
		if ($k%2 == 0)
			$output .= "<tr class='even'>";
		else
			$output .= "<tr class='odd'>";
		$output .= "<td>" . $k . "</td><td>$" . $temp_m_interest . "</td><td>$" . $temp_m_principal . "</td><td>$" . number_format($mpayment * ((1 - pow((1 + $rate),(($i-1)*12 + $k - $length)))/$rate),2,'.',',') . "</td></tr>";	
	
	$year_interest += $mpayment - ($mpayment * pow((1 + $rate), (($i-1)*12 + $k - 1 - $length)));
	$year_principal += $mpayment * pow((1 + $rate), (($i-1)*12 + $k - 1 - $length));
	$year_total += $mpayment;
	
	$a = floatval(preg_replace("/[^0-9.]*/","",$temp_m_interest));
	array_push($monthly_interest, $a);
	$b = floatval(preg_replace("/[^0-9.]*/","",$temp_m_principal));
	array_push($monthly_principal, $b); 
	}
	
	$output .= "<tr><td colspan='4' class='summary'>Summary of Year " . $i . "<br />Total spending: " . number_format($year_total,2,'.',',') . "<br />Total interest: " . number_format($year_interest,2,'.',','). "<br />Total principal: " . number_format($year_principal,2,'.',',') . "</td></tr>";
	$output .= "</table></td></tr></table>";
	
	echo $output;
	
}
echo "</div>";
?>



<script type="text/javascript">

var chart1; // globally available
jQuery(document).ready(function() {
	jQuery("h3.expand1").bind("click", function(){
		jQuery(".expand-div-1").slideToggle();	
		jQuery(this).toggleClass("collapse");
	});
	jQuery("h3.expand2").bind("click", function(){
		jQuery(".expand-div-2").slideToggle();								   
		jQuery(this).toggleClass("collapse");
	});

///////////////////////////////////////////////////////////////////////////Loan 1
	var length_1 = <?php echo $length_1 ?>;
	var length_array_1 = [];
	for (var i=1; i<=length_1; i++) {
		length_array_1.push(i);	
	}
	
	var monthly_interest_1=new Array("<?=implode("\",\"", $monthly_interest_1); ?>") 
	for (var i=0; i<monthly_interest_1.length; i++){
		monthly_interest_1[i] = parseFloat(monthly_interest_1[i]);
	}
	
	var monthly_principal_1=new Array("<?=implode("\",\"", $monthly_principal_1); ?>") 
	for (var i=0; i<monthly_principal_1.length; i++){
		monthly_principal_1[i] = parseFloat(monthly_principal_1[i]);
	} 
	
	//
	var total_interest_1 = Math.round(<?php echo $mpayment_1*$length_1-$principal_1 ?>*100)/100;
	var total_principal_1 = Math.round(<?php echo $principal_1 ?>*100)/100;
	
	////////////////////////////////////////////////////////////////////////////Loan 2
	var length = <?php echo $length ?>;
	var length_array = [];
	for (var i=1; i<=length; i++) {
		length_array.push(i);	
	}
	
	var monthly_interest=new Array("<?=implode("\",\"", $monthly_interest); ?>") 
	for (var i=0; i<monthly_interest.length; i++){
		monthly_interest[i] = parseFloat(monthly_interest[i]);
	}
	
	var monthly_principal=new Array("<?=implode("\",\"", $monthly_principal); ?>") 
	for (var i=0; i<monthly_principal.length; i++){
		monthly_principal[i] = parseFloat(monthly_principal[i]);
	} //alert(monthly_principal[2]);
	
	//
	var total_interest = Math.round(<?php echo $mpayment*$length-$principal ?>*100)/100;
	var total_principal = Math.round(<?php echo $principal ?>*100)/100;
	
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
					text: ''
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
					name: 'L-2 Monthly Interest',
					data: monthly_interest
			
				}, {
					name: 'L-2 Monthly Principal',
					data: monthly_principal
				},{
					name: 'L-1 Monthly Interest',
					data: monthly_interest_1
			
				}, {
					name: 'L-1 Monthly Principal',
					data: monthly_principal_1
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
					defaultSeriesType: 'column'
				},
				title: {
					text: 'Principal vs Interest'
				},
				xAxis: {
				    categories: ['Loan 1', 'Loan 2']
				},
				credits: {
					text: 'DailyCalculators.com',
					href: 'http://www.dailycalculators.com'
				},
				yAxis: {
					 min: 0,
					 title: {
						text: 'Amount($)'
					 },
					 stackLabels: {
						enabled: false,
						style: {
						   fontWeight: 'bold',
						   color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
						},
						data: '321'
					 }
				  },
				legend: {
					 align: 'center',
					 verticalAlign: 'bottom',
					 backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
					 borderColor: '#CCC',
					 borderWidth: 1,
					 shadow: false
				  },
				  tooltip: {
					 formatter: function() {
						return '<b>'+ this.x +'</b><br/>'+
							this.series.name +': $'+ addCommas(this.y) +'<br/>'+
							'Total: $'+ addCommas(Math.round(this.point.stackTotal*100)/100);
					 }
				  },
				  plotOptions: {
					 column: {
						stacking: 'normal',
						dataLabels: {
						   enabled: true,
						   rotation: -30,
						   color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#ffcc00',
						   formatter: function() {
								return '<b>$'+ addCommas(this.y) +'</b>';
							 }
						}
					 }
				  },
			    series: [{
					 name: 'Principal',
					 data: [total_principal_1,   total_principal]
				  }, {
					 name: 'Interest',
					 data: [total_interest_1,       total_interest]
				  }]
			});


			//
			function addCommas(nStr)
			{
				nStr += '';
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}
				var temp = x1 + x2;
				if (temp.indexOf(".") <= 0) temp = temp + ".00";
				return temp;
			}

			
}); //ready
</script>



</div><!-- end of .results-section -->