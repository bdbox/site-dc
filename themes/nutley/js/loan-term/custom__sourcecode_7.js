var loan, rate, emi, term, termY, termM, t_interest;

(function ($) {

    $(document).ready(function () {



        //
        $("#calculateBtn").click(function () {
			getData();
			calculate();
			doReport();
			chart = new Highcharts.Chart(getChartOptions());
        });

        //on page load
		getData();
		calculate();
		doReport();
		chart = new Highcharts.Chart(getChartOptions());

    }); //ready



    function getData() {
        loan = parseFloat($("#txtLoan").val());
        rate = parseFloat($("#txtRate").val()) / 100;
        emi = parseFloat($("#txtEMI").val());
    }

    function calculate() {
        term = Math.log(emi / (emi - loan * rate / 12)) / Math.log(1 + rate / 12);
        t_interest = (emi * term - loan);
        term = Math.ceil(term);
        termY = Math.floor(term / 12);
        termM = term - termY * 12;
        $("#txtAnswer").val(term);
    }

    //
    function doReport() {
        var reportStr = "";

        reportStr += "<tr><td class='lt'>It will take " + term + " months (That is " + termY + " years " + termM + " months) to pay off the loan.<br />";
        reportStr += "Total principle is $" + loan + ".<br />";
        reportStr += "Total interest is $" + Math.round(t_interest * 100) / 100 + ".";

        $("table.mortgageTable tbody:first").html("").append(reportStr);

    }

})(jQuery);

//chart theme
Highcharts.theme = {};
Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {

        borderWidth: 0,
        borderRadius: 0,
        backgroundColor: 'rgba(255, 255, 255, .0	)',
        plotShadow: true,
        plotBorderWidth: 0
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

function getChartOptions() {
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
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + Math.round(this.percentage * 100) / 100 + ' %';
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
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Principal vs Interest',
            data: [
                ['Principal', loan], {
                    name: 'Interest',
                    y: t_interest,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    };
    return chartOptions;
}

//chart
(function ($) { // encapsulate jQuery

    $(document).ready(function () {

        chart = new Highcharts.Chart(getChartOptions());
    });

})(jQuery);