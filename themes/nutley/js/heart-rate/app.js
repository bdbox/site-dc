var app = angular.module("app", ["ui.bootstrap"]);

app.controller("heartCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
	$scope.age = 30;
	$scope.isFemale = true;	
	$scope.intensity1 = 0.65;
	$scope.intensity2 = 0.85;	
	$scope.restHR = 67;
	$scope.maxHR = 187;
	$scope.targetHR = [145, 169];	
	$scope.maxFunction = "f1";
	$scope.targetFunction = "t1";
	
	//
	$scope.calcMax = function(f){
		$scope.maxHR = f;
	};
	
	//
	$scope.calcTarget = function(t) {
		$scope.targetHR = t;
	};
	
	//
	$scope.calculate = function(){
		$scope.calcMax(eval($scope.maxFunction)($scope.age));
		$scope.calcTarget(eval($scope.targetFunction)($scope.age));
	};
	
	$scope.$watch("maxHR", function(){
		$scope.calcTarget(eval($scope.targetFunction)($scope.age));
	});
		
	//Tanaka, Monahan, & Seals
	var f1 = function(age){
		return (208 - (0.7 * age));
	};
	
	//Haskell and Fox
	var f2 = function(age){
		return (220 - age);
	};
	
	//Robergs and Landwehr
	var f3 = function(age){
		return (205.08 - (0.685 * age));
	};
	
	//Gulati (for women)
	var f4 = function(age){
		return (206 - (0.88 * age));
	};
	
	//Gellish
	var f5 = function(age){
		if ($scope.isFemale){
			return (190.2 / ( 1 + Math.exp( 0.0453 * (age - 107.5) ) ));
		} else {
			return (203.7 / ( 1 + Math.exp( 0.033 * (age - 104.3) ) ) );
		}
	};
	
	//Karvonen method
	var t1 = function(){
		var targets = [];
		targets.push((($scope.maxHR - $scope.restHR) * $scope.intensity1) + $scope.restHR);
		targets.push((($scope.maxHR - $scope.restHR) * $scope.intensity2) + $scope.restHR);
		return targets;
	}; 
	
	//Zoladz method
	var t2 = function(){
		var targets = [];
		for (var i = 10; i<= 50; i=i+10){
			var target = [];
			target.push($scope.maxHR - i -5);
			target.push($scope.maxHR - i +5);
			targets.push(target);
		}
		
		return targets;
		
	};
	
	
}]);