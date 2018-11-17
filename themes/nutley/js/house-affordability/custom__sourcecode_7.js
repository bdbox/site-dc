var m_income, m_debt, m_pro_tax, m_insurance, m_mortgage, m_income_tax, m_left, total_loan, HAC;

(function ($) {


    $(document).ready(function () {

        //loan term
        $(":radio[name='loanTerm']", "form").each(function () {
            $(this).click(function () {
                $("#otherTerm").val("").attr("readonly", "readonly");
            });
        });
        $("#otherTerm").click(function () {
            $(this).removeAttr("readonly");
            $(":radio[name='loanTerm']", "form").each(function () {
                $(this).removeAttr("checked");
            });
        });

        //
        getHAC(30);

        //
        calculate(HAC.income, HAC.debt, HAC.tax, HAC.insurance, HAC.down, HAC.rate, HAC.term, HAC.FER, HAC.BER);

        //
        getChartData(HAC);

        //income, debt, tax, insurance, down, rate textbox
        $("#txtIncome, #txtDebt, #txtTax, #txtInsurance, #txtDown, #txtRate").blur(function () {
            if (isNaN($(this).val()) || ($(this).val() == "")) {
                alert("Please enter a number.");
            } else {
                if ($(this).attr("id") == "txtIncome")
                    HAC.income = parseFloat($("#txtIncome").val());
                if ($(this).attr("id") == "txtDebt")
                    HAC.debt = parseFloat($("#txtDebt").val());
                if ($(this).attr("id") == "txtTax")
                    HAC.tax = parseFloat($("#txtTax").val());
                if ($(this).attr("id") == "txtInsurance")
                    HAC.insurance = parseFloat($("#txtInsurance").val());
                if ($(this).attr("id") == "txtDown")
                    HAC.down = parseFloat($("#txtDown").val());
                if ($(this).attr("id") == "txtRate")
                    HAC.rate = parseFloat($("#txtRate").val());
            }
        });
        //term radio
        $(":radio[name='loanTerm']").each(function () {
            $(this).click(function () {
                HAC.term = parseFloat($(this).val());
                $("#otherTerm").val("");
                //alert(HAC.term);
            });
        });
        //term textbox
        $("#otherTerm").change(function () {
            if (isNaN($("#otherTerm").val())) {
                alert("Please enter a number.");
            } else if ($("#otherTerm").val() == "") {

            } else {
                HAC.term = parseFloat($("#otherTerm").val());
                $(":radio[name='loanTerm']").each(function () {
                    $(this).removeAttr("checked");
                });
                //alert(HAC.term);
            }
        });
        //FER radio
        $(":radio[name='fpercent']").each(function () {
            $(this).click(function () {
                HAC.FER = parseFloat($(this).val());
            });
        });
        //BER radio
        $(":radio[name='bpercent']").each(function () {
            $(this).click(function () {
                HAC.BER = parseFloat($(this).val());
            });
        });

        //alert(HAC.FER);
        $("#calculateBtn").click(function () {
            getHAC(HAC.term);
            calculate(HAC.income, HAC.debt, HAC.tax, HAC.insurance, HAC.down, HAC.rate, HAC.term, HAC.FER, HAC.BER);
            getChartData(HAC);
            chart = new Highcharts.Chart(getChartOptions());
        });

    }); //ready

    function getHAC(n) {
        HAC = {
            income: parseFloat($("#txtIncome").val()),
            debt: parseFloat($("#txtDebt").val()),
            tax: parseFloat($("#txtTax").val()),
            insurance: parseFloat($("#txtInsurance").val()),
            down: parseFloat($("#txtDown").val()),
            rate: parseFloat($("#txtRate").val()) / 1200,
            incomeTax: parseFloat($("#txtIncomeTax").val()) / 100,
            term: n,
            FER: parseFloat($(":radio[name='fpercent']:checked").val()),
            BER: parseFloat($(":radio[name='bpercent']:checked").val())
        };
    }

    function getChartData(HAC) {
        m_income = HAC.income / 12;
        m_debt = HAC.debt;
        m_pro_tax = HAC.tax / 12;
        m_insurance = HAC.insurance / 12;
        m_mortgage = total_loan * (HAC.rate / 12 / (1 - Math.pow((1 + HAC.rate / 12), -HAC.term * 12)));
        m_income_tax = HAC.incomeTax * m_income;
        m_left = m_income - m_debt - m_pro_tax - m_insurance - m_mortgage - m_income_tax;
    }

    function calculate(income, debt, tax, insurance, down, rate, term, fer, ber) {
        var temp1 = income / 12 * ber - debt;
        var temp2 = income / 12 * fer;
        var spareMoney = (temp1 <= temp2) ? (temp1 - tax / 12 - insurance / 12) : (temp2 - tax / 12 - insurance / 12);

        var loan = (1 - Math.pow((1 + rate), (-term * 12))) * spareMoney / (rate);
        loan = Math.round(loan * 100) / 100;
        total_loan = loan;
        $("#txtAnswer").val((loan + down).toFixed(2));

        var txt = "";
        txt = "Down payment: $" + down + "br />";
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
            text: 'Monthly Income Breakdown'
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
            name: 'Monthly Income Breakdown',
            data: [
                ['Debt', m_debt],
                ['Property Tax', m_pro_tax], {
                    name: 'Leftover',
                    y: m_left,
                    sliced: true,
                    selected: true
                },
                ['Insurance', m_insurance],
                ['Mortgage', m_mortgage],
                ['Income Tax', m_income_tax]
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