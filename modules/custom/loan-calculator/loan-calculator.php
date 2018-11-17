
<div class="results-section">
<h2>Summary of loan</h2>

<?php
$price = floatval(preg_replace("/[^0-9.]*/","",$_POST["price"]));
$principal = $price;
$length = floatval(preg_replace("/[^0-9.]*/","",$_POST["length"]));
$rate = floatval(preg_replace("/[^0-9.]*/","",$_POST["rate"])) / 1200;

$monthly_interest = array();
$monthly_principal = array();

$mpayment = floatval($principal * ($rate / (1 - (pow((1 + $rate), -$length)))));
$year_interest;
$year_principal;
$year_total;
$output;

echo "<div class='summaryDiv'>";
?>


<?php
$summary =  "<table class='summaryTableOuter'><tr><td><table class='summaryTable' width='100%' border='0' cellspacing='0'>".
"<tr class='hd'><th></th><th>Amount<br />($)</th></tr>".
"<tr class='odd'><td class='lt' width='160'>Loan amount</td><td> $".number_format($price,2,'.',',')."</td></tr>".
"<tr class='even'><td class='lt'>Term</td><td>" . $length . " months</td></tr>".
"<tr class='odd'><td class='lt'>Rate</td><td>" . $rate*1200 . "%</td></tr>".
"<tr class='even'><td class='lt'><strong>Monthly payment</strong>:</td><td>$" . number_format($mpayment,2,'.',',') . "</td></tr>".
"<tr class='odd'><td class='lt'>Total Payment</td><td>$" . number_format($mpayment*$length,2,'.',',') . "</td></tr>".
"<tr class='even'><td class='lt'>Total Principal</td><td>$" . number_format($principal,2,'.',',') . "</td></tr>".
"<tr class='odd'><td class='lt'>Total Interest</td><td>$" . number_format($mpayment*$length-$principal,2,'.',',')."</td></tr>".
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
<?php

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

?>


<script type="text/javascript">

var chart1; // globally available
//$(document).ready(function() {
	
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
	var total_interest = <?php echo $mpayment*$length-$principal ?>;
	var total_principal = <?php echo $principal ?>;
	
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
					text: 'Total ' + length_array.length + ' payments'
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
					data: monthly_interest
			
				}, {
					name: 'Monthly Principal Payment',
					data: monthly_principal
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
					text: 'Total ' + length_array.length + ' payments'
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
						['Principal',   total_principal],
						{name:'Interest',       y:total_interest, sliced: true, selected: true}
					]
				}]
			});



			
//}); //ready
</script>

</div><!-- end of .results-section -->
