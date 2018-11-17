var app = angular.module("app", []);

app.controller("irrCtrl", ["$scope","$timeout", function($scope, $timeout){
	$scope.isBatch = false;
	$scope.batchEntry = "";
	
	$scope.initInv = 0;
	$scope.cashflows = [
	   {"inn": 0, "out": 0, "net": 0}
	];
	
	
	//
	$scope.addRow = function(){
		$scope.cashflows.push({"inn": 0, "out": 0, "net": 0});
	};
	
	//
	$scope.showExample = function(){ 
		reset();
		$scope.batchEntry = "-85000, 20000, 20000, 20000 -3200, 20000, 20000";	
	};
	$scope.showExample2 = function(){
		reset();
		$scope.batchEntry = "-1235000, 300000 -5000, 300000 -8000, 200000 -13200, 200000 -16700, 200000 17000, 20000 17000, 150000, 150000";	
	};
	$scope.showExample3 = function(){
		reset();
		$scope.batchEntry = "-5317, 1344, 1478, 1576, 1209, 1203, 1119 -978";	
	};
	
	//
	$scope.batch = function(){
		$scope.isBatch = !$scope.isBatch;	
	};
		
	//
	$scope.batchFrom = function(){
		var data = $scope.cashflows;
		var str = $scope.initInv;
		for (var i=0; i<data.length; i++) {
			str += ", ";
			if (data[i].inn !== 0)
				str += data[i].inn;
			if (data[i].out !== 0)
			 	str += " " + data[i].out;
		}
		if (str.indexOf("undefined") > 0)
			jQuery("#err-msg").show(function(){setTimeout(function(){jQuery("#err-msg").hide();}, 3000);});
		
		$scope.batchEntry = str;
		genUrl();
	};
	
	//
	$scope.batchTo = function(data){
		data = data.trim();
		if (data.charAt(data.length-1) == ",")
			data = data.substring(0, data.length-1);
		var arr = data.split(",");
		reduceArray($scope.cashflows, $scope.cashflows.length + 1, arr.length);
		if (data == "") reset();
		
		var n = -1;
		for (var i=0; i<arr.length; i++) {
			var item = arr[i].trim();
			if (item.indexOf(" ") > 0){
				item = item.split(" ");
			} 
			
			if (i === 0){
				if (typeof item == "string"){
					if (parseFloat(item) > 0) 
						$scope.initInv = -parseFloat(item);	
					else if (isNaN(parseFloat(item)))
						$scope.initInv = 0;
					else
						$scope.initInv = parseFloat(item);	
				} else if (item instanceof Array){
					$scope.initInv = parseFloat(item[0]);
				} else {
					$scope.initInv = 0;
				}
				if ($scope.initInv == NaN) $scope.initInv = 0;
				n++;
			} else {
				batch2cash(item, n++);
			}
		}
	};
	
	//
	function reduceArray(arr, from, to){
		if (from > to){
			for (var i=from; i>to; i--){
				if (arr.length === 1) break; 
				arr.pop();				
			}
			arr[arr.length-1].inn = 0;
			arr[arr.length-1].out = 0;
		}
	}
	
	//
	function batch2cash(value, index){
		var tem = {"inn": 0, "out": 0, "net": 0};
		if (typeof value == "string") {
			value = string2array(value);
			if (value >= 0){
				if ( index < $scope.cashflows.length){
					$scope.cashflows[index]["inn"] = value;
					calcNet(index);
				} else {
					jQuery.extend(tem, {"inn": value});
					$scope.cashflows.push(tem);
					calcNet();
				}
			} else {
				if ( typeof($scope.cashflows[index]) !== "undefined"){
					$scope.cashflows[index]["out"] = value;
					calcNet(index);
				} else {
					jQuery.extend(tem, {"out": value});
					$scope.cashflows.push(tem);
					calcNet();
				}
			}
		} else if (value instanceof Array) {
			value = string2array(value);
			value[1] = value[1]>=0 ? - value[1] : value[1];
			if ( typeof($scope.cashflows[index]) !== "undefined"){
				$scope.cashflows[index]["inn"] = value[0];
				$scope.cashflows[index]["out"] = value[1];
				calcNet(index);
			} else {
				jQuery.extend(tem, {"inn": value[0], "out": value[1]});
				$scope.cashflows.push(tem);
					calcNet();
			}
		}
	}
	
	//
	function calcNet(index) {
		index = index ? index : ($scope.cashflows.length - 1)
		$scope.cashflows[index].net = $scope.cashflows[index].inn - $scope.cashflows[index].out;	
	}
	
	//
	function string2array(data){
		if (typeof data == "string"){
			return parseFloat(data);	
		} else if (data instanceof Array){
			for (var i=0; i<data.length; i++){
				data[i] = parseFloat(data[i]);	
			}
			return data;
		} else {
			return;	
		}
		
	}
	
	//
	function genUrl(){
		var url = document.location.href;		
		if ($scope.batchEntry.indexOf("undefined") == -1 && $scope.batchEntry.indexOf("NaN") == -1 && $scope.batchEntry != ""){
			if (url.indexOf("?value=") > 0)
				url = url.split("?value=")[0];
			var temp = 	url + "?value=" + encodeURIComponent($scope.batchEntry);
			jQuery(".shareUrl textarea").html(temp);
		} else {
			jQuery(".shareUrl textarea").html("");	
		}
	}
	
	//
	function getFromUrl(){
		var url = document.location.href;
		var data;
		if (url.indexOf("?value=") > 0){
			data = url.split("?value=")[1];	
			$scope.batchEntry = decodeURIComponent(data);
		} else
			return;
	}
	getFromUrl();
	
	//
	function reset(){
		$scope.initInv = 0;
		$scope.cashflows = [
		   {"inn": 0, "out": 0, "net": 0}
		];
	}
	
	//
	var batchTimeout;
	$scope.$watch("batchEntry", function(){
		if (batchTimeout) {
			$timeout.cancel(batchTimeout);	
		}
		
		batchTimeout = $timeout(function(){
			$scope.batchTo($scope.batchEntry);								 
		}, 250);
	});	
	


}]);//irrCtrl















(function ($) {
    $(document).ready(function () {
        $("#calculateBtn").click(function () {
            calculate();
        });
    });

    function calculate() {
        var data = loadData();
        var irr = Math.round(calc(data) * 10000) / 100;
        //$("#txtAnswer").val(irr + "%");
        $(".formTable .c3").each(function (n) {
            $(this).val(addCommas(data.net[n]));
        });
        $(".formTable .t1").html(addCommas(sumArray(data.cin)));
        $(".formTable .t2").html(addCommas(sumArray(data.out)));
        $(".formTable .t3").html(addCommas(sumArray(data.net)));
        if (irr) {
            doChart(irr);
        } else {
            $("#chart_div2").html("");
        }
        doReport(irr);
    }

    function calc(data) {
        var irr = 0;
        var temp = 0;
        var t;
        if (npv(data, irr) >= 0) {
            while (irr < 1) {
                temp = npv(data, irr);
                if (temp < 0) {
                    return irr;
                }
                irr = irr + 0.0001;
            }
        }
        if (npv(data, irr) < 0) {
            while (irr > -1) {
                temp = npv(data, irr);
                if (temp > 0) {
                    return irr;
                }
                irr = irr - 0.0001;
            }
        }
        return "n";
    }

    function npv(data, irr) {
        var npv = data.initInvest;
        for (var i = 0; i < data.net.length; i++) {
            npv += data.net[i] / Math.pow((1 + irr), i + 1);
        }
        return npv;
    }

    function sumArray(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total.toFixed(2);
    }

    function addCommas(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

    function loadData() {
        var data = {};
        data.initInvest = parseFloat($("#initVal").val());
        data.cin = new Array();
        data.out = new Array();
        data.net = new Array();
        $(".formTable .c1").each(function (n) {
            data.cin.push(parseFloat($(this).val()));
        });
        $(".formTable .c2").each(function (n) {
            data.out.push(parseFloat($(this).val()));
        });
        $(".formTable .c3").each(function (n) {
            data.net.push(data.cin[n] + data.out[n]);
        });
        return data;
    }

    function doReport(irr) {
		$("#s0").html(irr + "%");
    }

    function doChart(irr) {
        irr = Math.round(irr * 100) / 10000;
        if (irr < 0.9) irr += 0.1;
        var chartData = [];
        while (irr > -0.1) {
            irr = irr - 0.01;
            var item = [];
            item.push(Math.round(irr * 100) / 100);
            item.push(calcNpv(irr));
            chartData.push(item);
        }
        var chart1 = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_div2',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                width: 650
            },
            title: {
                text: 'IRR & NPV Chart'
            },
            xAxis: {
                reversed: false,
                title: {
                    enabled: true,
                    text: 'Discount Rate'
                },
                showLastLabel: true,
                gridLineWidth: 1,
                labels: {
                    formatter: function () {
                        return this.value * 100 + '%';
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Net Present Value ($)'
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            series: [{
                type: 'line',
                name: 'IRR & NPV',
                data: []
            }]
        });
        chart1.series[0].setData(chartData);
    }

    function calcNpv(rate) {
        var data = loadData();
        var npv = data.initInvest;
        for (var i = 0; i < data.cin.length; i++) {
            npv = npv + (data.cin[i] + data.out[i]) / Math.pow((1 + rate), (1 + i));
        }
        return Math.round(npv * 100) / 100;
    }
})(jQuery);