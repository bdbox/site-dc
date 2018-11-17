var app = angular.module("app", []);

app.controller("ibwCtrl", ["$scope", function($scope){
	$scope.isImperial = 1;
	$scope.sex = "female";
	
    $scope.height_i_feet = 5;
    $scope.height_i_inch = 3;
    $scope.height_i = 63;
    $scope.height_m = 160;
    $scope.ideal = {"devine": 52.4, "hamwi": 115 };
    
 
	
    //
    $scope.calculate = function(){
        if ($scope.isImperial === 1){
            if ($scope.height_i_inch >= 12){
                $scope.height_i_feet++;
                $scope.height_i_inch -= 12;
            }
            if ($scope.height_i_inch < 0){
                $scope.height_i_feet--;
                $scope.height_i_inch = 11;
            }
            $scope.height_i = ($scope.height_i_feet*12 + $scope.height_i_inch).round(1);
            $scope.height_m = ($scope.height_i*2.54).round(2); //inch to cm
        }else{
            $scope.height_i = ($scope.height_m/2.54).round(1); //cm to inch
            $scope.height_i_feet = parseInt($scope.height_i/12);
            $scope.height_i_inch = ($scope.height_i%12).round(2);
        }	
        
        
        if ($scope.sex === "female"){
        	//devine formula
        	$scope.ideal.devine = 45.5 + 2.3 * ($scope.height_i - 60);
        	//hamwi
        	$scope.ideal.hamwi = 100 + 5 * ($scope.height_i - 60);
        	
        } else {
        	//devine formula
        	$scope.ideal.devine = 50 + 2.3 * ($scope.height_i - 60);
        	//hamwi
        	$scope.ideal.hamwi = 106 + 6 * ($scope.height_i - 60);
        }
		
    };
    
    //
    $scope.region = "North America";
	
	//
	$scope.checkSex = function(e){
		var el = jQuery(e.target);
		if (el.hasClass("on")){
			el.siblings().addClass("on");
			el.removeClass("on");
			if (el.hasClass("female")){
				$scope.sex = "female";
			} else {
				$scope.sex = "male";
			}
		} else {
			el.siblings().removeClass("on");
			el.addClass("on");
			if (el.hasClass("female")){
				$scope.sex = "female";
			} else {
				$scope.sex = "male";
			}
			
		}
		$scope.calculate();
	};
	
	//
	$scope.data = {
			"Africa" : 60.7,
			"Asia" : 57.7,
			"Europe" : 70.8,
			"Latin America" : 67.9,
			"Caribbean" : 67.9,
			"North America": 80.7,
			"Oceania" : 74.1,
			"World" : 62 
	};
	
	

	//decimal round
	Number.prototype.round = function(places) {
	    return +(Math.round(this + "e+" + places)  + "e-" + places);
	}
	
}]);