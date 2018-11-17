var app = angular.module("app", []);

app.controller("amCtrl", ["$scope", function($scope){
	$scope.entry = null;
	$scope.sum = null;
	$scope.sub = null;
	$scope.subs = [];
	$scope.mode = "auto";
	$scope.operator = "+";
	
	$scope.records = []; 
	
	//
	$scope.calc = function(e){
		if (e.keyCode === 13){			
			$scope.calculate();
						
		}
	};
	
	//
	$scope.calculate = function(){
		switch($scope.mode){
		case "auto":
			$scope.operator = "+";
			cleanData($scope.entry);
			break;
		case "currency":
			$scope.operator = "+";
			cleanData($scope.entry);
			//$scope.value /= 100;
			break;
		case "+":
			$scope.operator = "+";
			cleanData($scope.entry);
			break;
		case "-":
			$scope.operator = "-";
			cleanData($scope.entry);
			break;
		case "*":
			$scope.operator = "*";
			cleanData($scope.entry);
			break;
		case "/":
			$scope.operator = "/";
			cleanData($scope.entry);
			break;
		};	
		
		$scope.records[0].operator = " ";
		
	};
	
	//
	function cleanData(data){
		if (data.length > 0){		
			if (!isNaN(parseFloat(data))){
				if ($scope.mode === "currency"){
					$scope.entry = parseFloat(data) / 100;
				} else {
					$scope.entry = parseFloat(data);
				}
			} else {
				var p_1 = data.substring(0, 1);
				var p_2 = data.substring(1, data.length);
				if (!isNaN(p_2) && (p_1 === "*" || p_1 === "/")) {
					if ($scope.mode === "currency"){
						$scope.entry = parseFloat(p_2) / 100;
					} else {
						$scope.entry = parseFloat(p_2);
					}
					
					$scope.operator = p_1;
				} else {
					//error
					$scope.entry = "";
					return;
				}
			}
		
		} else {
			$scope.entry = "";
			return;
		}
		
		if ($scope.sub === null) {
			$scope.sub = $scope.entry;
		} else {
			$scope.sub = operate($scope.operator, $scope.sub, $scope.entry);
		}
		
		$scope.subs.push($scope.sub);
		$scope.sum = $scope.sub;
		
		var temp = {};
		temp.value = $scope.entry;
		temp.operator = $scope.operator;
		$scope.records.push(temp);
		$scope.entry = "";
		
	}
	
	//
	function operate(operator, x, y){
		x = parseFloat(x);
		y = parseFloat(y);
		if (operator === "+") {
			return x+y;
		} else if (operator === "-"){
			return x-y;
		} else if (operator === "*"){
			return x*y;
		} else if (operator === "/"){
			return x/y;
		}
	}
	
	//
	$scope.remove = function(array, index){
	    array.splice(index, 1);
	    //console.log(JSON.stringify(array));
	    reSub(array);
	};
	
	//
	function reSub(arr){
		$scope.subs = [];
		for (var i = 0; i < arr.length; i++){
			if (i === 0){
				$scope.sub = arr[i].value;
			} else {
				//console.log(i + "--" + $scope.subs[i-1] + "--" +  arr[i].value);
				$scope.sub = operate(arr[i].operator, $scope.subs[i-1], arr[i].value);
			}
			$scope.subs.push($scope.sub);
			//console.log($scope.subs);
			$scope.sum = $scope.sub;
		}
	}
	
}]);