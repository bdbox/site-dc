var app = angular.module("app", []);

app.controller("adultCtrl", ["$scope", function($scope){
	$scope.eur = 38;
	$scope.uk = 5;
	$scope.us = 6;
	$scope.usw = 7;
	$scope.cn = 24.5;
	$scope.currentSelect;
	var w = 200; //width of window
	
	
	//
	$scope.f = function($event){
		$scope.currentSelect = jQuery($event.target).attr("id");
	};
	
	//
	$scope.g = function(){
		if ($scope.currentSelect === "selectEUR"){
			go($scope.eur, "europe");
		} else if ($scope.currentSelect === "selectUK"){
			go($scope.uk, "uk");
		} else if ($scope.currentSelect === "selectUS"){
			go($scope.us, "us");
		}  else if ($scope.currentSelect === "selectUSW"){
			go($scope.usw, "usw");
		}  else if ($scope.currentSelect === "selectCN"){
			go($scope.cn, "cn");
		} else {}
	};
	
	//
	var go = function(size, region){
		var position;
		if (region === "europe" && size >= 32 && size <= 49) {
			position = 27 + 71 * (size - 32) - (w - 70)/2;
			move(-position);
			var p = 27 + (size - 32) * 71 + 70/2;
			getVal(p, "uk");
			getVal(p, "cn");
			getVal(p, "us");
			getVal(p, "usw");
		} else if (region === "uk" && size >= 0 && size <= 14 ) {
			position = 22 + 45 * (size * 2) - (w - 45)/2;
			move(-position);
			var p = 22 + (size * 2 - 0) * 45 + 44/2;
			getVal(p, "europe");
			getVal(p, "cn");
			getVal(p, "us");
			getVal(p, "usw");
		} else if (region === "us" && size >= 1 && size <= 15 ) {
			position = 22 + 45 * (size * 2 - 2) - (w - 45)/2;
			move(-position);
			var p = 22 + (size * 2 - 2) * 45 + 44/2;
			getVal(p, "europe");
			getVal(p, "uk");
			getVal(p, "cn");
			getVal(p, "usw");
		}  else if (region === "usw" && size >= 2 && size <= 16 ) {
			position = 22 + 45 * (size * 2 - 4) - (w - 45)/2;
			move(-position);
			var p = 22 + (size * 2 - 4) * 45 + 44/2;
			getVal(p, "europe");
			getVal(p, "uk");
			getVal(p, "us");
			getVal(p, "cn");
		} else if (region === "cn" && size >= 20 && size <= 30 ) {
			position = 53 * (size * 2 - 40) - (w - 53)/2;
			move(-position);
			var p = 22 + (size * 2 - 40) * 53 + 53/2;
			getVal(p, "europe");
			getVal(p, "uk");
			getVal(p, "us");
			getVal(p, "usw");
		} else {
			//error
		}
	};
	
	//
	var move = function(pos){
		//var left = parseInt(jQuery("#shoeMeter .base").css("left"));
		jQuery("#shoeMeterAdult .base").animate({"left": pos});
		
	};
	
	//
	var getVal = function(position, region){
		if (region === "europe"){
			$scope.eur = Math.ceil((position-27)/71) + 31;
		} else if (region === "uk") {
			$scope.uk = Math.ceil((position-22)/45)/2 - 0.5 ;
		} else if (region === "us"){
			$scope.us = Math.ceil((position-22)/45)/2 + 0.5 ;
		} else if (region === "usw"){
			$scope.usw = Math.ceil((position-22)/45)/2 + 1.5 ;
		} else if (region === "cn"){
			$scope.cn = Math.ceil((position)/53)/2 + 19.5 ;
			console.log(position);
		} else {
			
		}
	};
	
}]);

app.controller("childCtrl", ["$scope", function($scope){
	$scope.eur = 22;
	$scope.uk = 5;
	$scope.us = 6;
	$scope.cn = 14;
	$scope.currentSelect;
	var w = 200; //width of window
	
	
	//
	$scope.f = function($event){
		$scope.currentSelect = jQuery($event.target).attr("id");
	};
	
	//
	$scope.g = function(){
		if ($scope.currentSelect === "selectEUR"){
			go($scope.eur, "europe");
		} else if ($scope.currentSelect === "selectUK"){
			go($scope.uk, "uk");
		} else if ($scope.currentSelect === "selectUS"){
			go($scope.us, "us");
		} else if ($scope.currentSelect === "selectCN"){
			go($scope.cn, "cn");
		} else {}
	};
	
	//
	var go = function(size, region){
		var position;
		if (region === "europe" && size >= 14 && size <= 31) {
			position = 27 + 71 * (size - 14) - (w - 70)/2;
			move(-position);
			var p = 27 + (size - 14) * 71 + 70/2;
			getVal(p, "uk");
			getVal(p, "cn");
			getVal(p, "us");
			getVal(p, "usw");
		} else if (region === "uk" && size >= 0 && size <= 13 ) {
			position = 128 + 45 * (size * 2) - (w - 45)/2;
			move(-position);
			var p = 128 + (size * 2 - 0) * 45 + 44/2;
			getVal(p, "europe");
			getVal(p, "cn");
			getVal(p, "us");
			getVal(p, "usw");
		} else if (region === "us" && size >= 1 && size <= 13 ) {
			position = 188 + 45 * (size * 2 - 2) - (w - 45)/2;
			move(-position);
			var p = 188 + (size * 2 - 2) * 45 + 44/2;
			getVal(p, "europe");
			getVal(p, "uk");
			getVal(p, "cn");
			getVal(p, "usw");
		} else if (region === "cn" && size >= 8 && size <= 20 ) {
			position = 53 * (size * 2 - 16) - (w - 53)/2;
			move(-position);
			var p = (size * 2 - 16) * 53 + 53/2;
			getVal(p, "europe");
			getVal(p, "uk");
			getVal(p, "us");
			getVal(p, "usw");
		} else {
			//error
		}		
		
	};
	
	//
	var move = function(pos){
		//var left = parseInt(jQuery("#shoeMeter .base").css("left"));
		jQuery("#shoeMeter .base").animate({"left": pos});
		
	};
	
	//
	//
	var getVal = function(position, region){
		if (region === "europe"){
			$scope.eur = Math.ceil((position-27)/71) + 13;
		} else if (region === "uk") {
			$scope.uk = Math.ceil((position-128)/45)/2 - 0.5 ;
			console.log(position);
		} else if (region === "us"){
			$scope.us = Math.ceil((position-188)/45)/2 + 0.5 ;
		} else if (region === "cn"){
			$scope.cn = Math.ceil((position)/53)/2 + 7.5 ;
		} else {
			
		}
	};
	
}]);