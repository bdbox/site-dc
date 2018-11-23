// JavaScript Document

var price;
var down;
var length;
var rate;
var dataString;
var price_1;
var down_1;
var length_1;
var rate_1;
var dataString_1;

(function ($) {

    $(document).ready(function () {
        //submit button
        $("#calculateBtn").bind("click", function () {
            price = parseFloat($("#price").val());
            down = parseFloat($("#down").val());
            length = parseFloat($("#length").val());
            rate = parseFloat($("#rate").val());

            if ($('#addToCompare').is(':checked')) {
                $('#addToCompare').attr("disabled", "disabled");
                $("#price").focus();
                return false;
            } else {
                var dataString = 'price=' + price + '&down=' + down + '&length=' + length + '&rate=' + rate;
                //alert (dataString);return false;
                $.ajax({
                    type: "GET",
                    url: "/mortgage-calc/get.json",
                    data: dataString,
                    success: function (response) {
                        $('#result_panel').html(response);
                    }
                });
                return false;
            }
        });

        $("#calculateBtn2").bind("click", function () {
            price_1 = parseFloat($("#price").val());
            down_1 = parseFloat($("#down").val());
            length_1 = parseFloat($("#length").val());
            rate_1 = parseFloat($("#rate").val());

            var dataString_1 = 'price=' + price + '&down=' + down + '&length=' + length + '&rate=' + rate + '&price_1=' + price_1 + '&down_1=' + down_1 + '&length_1=' + length_1 + '&rate_1=' + rate_1;
            //alert (dataString_1);return false;
            $.ajax({
                type: "GET",
                url: "/mortgage-calc/get.json",
                data: dataString_1,
                success: function (response) {
                    $('#result_panel').html(response);
                }
            });
            return false;
        });

        //add to compare checkbox
        $("#addToCompare").click(function () {
            if ($("#addToCompare:checked").length > 0) {
                $("#calculateBtn").hide();
                $("#calculateBtn2").css("display", "block");
                price = parseFloat($("#price").val());
                down = parseFloat($("#down").val());
                length = parseFloat($("#length").val());
                rate = parseFloat($("#rate").val());
                $("#price").select();
            } else {
                $("#calculateBtn2").hide();
                $("#calculateBtn").show();
            }
        });

        //down calculate
        $("#down").bind("keyup", function () {
            var temp = parseFloat($("#price").val()) * parseFloat($("#down").val()) / 100;
            if (temp)
                $("#down-amount").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<em>$" + temp + "</em>)");
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
                text: 'Monthly Mortgage Payment'
            },
            subtitle: {
                text: 'Total ' + 180 + ' payments'
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
                formatter: function () {
                    return (this.series.name) + '<br/>The No. ' + (this.x + 1) + ' Payment: $' + this.y;
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
                data: [866.67, 862.92, 859.17, 855.41, 851.64, 847.85, 844.06, 840.25, 836.44, 832.62, 828.78, 824.94, 821.08, 817.21, 813.34, 809.45, 805.55, 801.65, 797.73, 793.8, 789.86, 785.91, 781.95, 777.97, 773.99, 770, 765.99, 761.98, 757.95, 753.91, 749.87, 745.81, 741.74, 737.66, 733.57, 729.46, 725.35, 721.22, 717.09, 712.94, 708.78, 704.61, 700.43, 696.23, 692.03, 687.82, 683.59, 679.35, 675.1, 670.84, 666.57, 662.28, 657.98, 653.68, 649.36, 645.03, 640.68, 636.33, 631.96, 627.58, 623.19, 618.79, 614.38, 609.95, 605.51, 601.07, 596.6, 592.13, 587.64, 583.14, 578.63, 574.11, 569.58, 565.03, 560.47, 555.9, 551.31, 546.72, 542.11, 537.49, 532.85, 528.21, 523.55, 518.87, 514.19, 509.49, 504.78, 500.06, 495.32, 490.58, 485.82, 481.04, 476.25, 471.45, 466.64, 461.82, 456.98, 452.12, 447.26, 442.38, 437.49, 432.58, 427.67, 422.73, 417.79, 412.83, 407.86, 402.87, 397.88, 392.86, 387.84, 382.8, 377.75, 372.68, 367.6, 362.5, 357.4, 352.27, 347.14, 341.99, 336.82, 331.65, 326.46, 321.25, 316.03, 310.8, 305.55, 300.29, 295.01, 289.72, 284.41, 279.09, 273.76, 268.41, 263.05, 257.67, 252.28, 246.87, 241.45, 236.02, 230.57, 225.1, 219.62, 214.13, 208.62, 203.09, 197.55, 192, 186.43, 180.84, 175.24, 169.63, 164, 158.35, 152.69, 147.01, 141.32, 135.61, 129.89, 124.15, 118.4, 112.63, 106.85, 101.05, 95.23, 89.4, 83.55, 77.69, 71.81, 65.91, 60, 54.07, 48.13, 42.17, 36.19, 30.2, 24.2, 18.17, 12.13, 6.07]

            }, {
                name: 'Monthly Principal Payment',
                data: [1381.87, 1385.62, 1389.37, 1393.13, 1396.9, 1400.69, 1404.48, 1408.29, 1412.1, 1415.92, 1419.76, 1423.6, 1427.46, 1431.33, 1435.2, 1439.09, 1442.99, 1446.89, 1450.81, 1454.74, 1458.68, 1462.63, 1466.59, 1470.57, 1474.55, 1478.54, 1482.55, 1486.56, 1490.59, 1494.63, 1498.67, 1502.73, 1506.8, 1510.88, 1514.98, 1519.08, 1523.19, 1527.32, 1531.45, 1535.6, 1539.76, 1543.93, 1548.11, 1552.31, 1556.51, 1560.72, 1564.95, 1569.19, 1573.44, 1577.7, 1581.97, 1586.26, 1590.56, 1594.86, 1599.18, 1603.51, 1607.86, 1612.21, 1616.58, 1620.96, 1625.35, 1629.75, 1634.16, 1638.59, 1643.03, 1647.48, 1651.94, 1656.41, 1660.9, 1665.4, 1669.91, 1674.43, 1678.96, 1683.51, 1688.07, 1692.64, 1697.23, 1701.82, 1706.43, 1711.05, 1715.69, 1720.33, 1724.99, 1729.67, 1734.35, 1739.05, 1743.76, 1748.48, 1753.22, 1757.96, 1762.72, 1767.5, 1772.29, 1777.09, 1781.9, 1786.72, 1791.56, 1796.42, 1801.28, 1806.16, 1811.05, 1815.96, 1820.87, 1825.81, 1830.75, 1835.71, 1840.68, 1845.67, 1850.66, 1855.68, 1860.7, 1865.74, 1870.79, 1875.86, 1880.94, 1886.04, 1891.14, 1896.27, 1901.4, 1906.55, 1911.72, 1916.89, 1922.08, 1927.29, 1932.51, 1937.74, 1942.99, 1948.25, 1953.53, 1958.82, 1964.13, 1969.45, 1974.78, 1980.13, 1985.49, 1990.87, 1996.26, 2001.67, 2007.09, 2012.52, 2017.97, 2023.44, 2028.92, 2034.41, 2039.92, 2045.45, 2050.99, 2056.54, 2062.11, 2067.7, 2073.3, 2078.91, 2084.54, 2090.19, 2095.85, 2101.53, 2107.22, 2112.93, 2118.65, 2124.39, 2130.14, 2135.91, 2141.69, 2147.49, 2153.31, 2159.14, 2164.99, 2170.85, 2176.73, 2182.63, 2188.54, 2194.47, 2200.41, 2206.37, 2212.35, 2218.34, 2224.34, 2230.37, 2236.41, 2242.47]
            }],
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
                text: 'Total ' + 180 + ' payments'
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
                        enabled: true,
                        color: '#000000',
                        distance: 0,
                        connectorColor: '#000000',
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: <br>' + Math.round(this.percentage * 100) / 100 + ' %';
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Principal/Interest Percentage',
                data: [
                    ['Principal', 320000], {
                        name: 'Interest',
                        y: 84737.21,
                        sliced: true,
                        selected: true
                    }
                ]
            }]
        });




    }); //ready

})(window.jQuery);
