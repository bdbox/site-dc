var app = angular.module('app', ['ui.bootstrap']);

app.controller('bmrCtrl', ["$scope", function($scope){
    $scope.weight_i = 122; 
    $scope.height_i_feet = 5;
    $scope.height_i_inch = 3;
    $scope.height_i = 63;
    $scope.weight_m = 55;
    $scope.height_m = 160;
    $scope.isImperial = true;
    $scope.isFemale = true;
    $scope.bmr = 1355;
    $scope.age = 27;
	
    $scope.calculate = function(){
        if ($scope.isImperial){
            if ($scope.height_i_inch >= 12){
                $scope.height_i_feet++;
                $scope.height_i_inch -= 12;
            }
            if ($scope.height_i_inch < 0){
                $scope.height_i_feet--;
                $scope.height_i_inch = 11;
            }
            $scope.height_i = ($scope.height_i_feet*12 + $scope.height_i_inch).round(1);
            
            if ($scope.isFemale){
            	$scope.bmr = 655 + (4.35 * $scope.weight_i) + (4.7 * $scope.height_i) - (4.7 * $scope.age);
            }else {
            	$scope.bmr = 66 + (6.2 * $scope.weight_i) + (12.7 * $scope.height_i) - (6.76 * $scope.age);
            }
            $scope.weight_m = ($scope.weight_i*0.4536).round(2); //lb to kg
            $scope.height_m = ($scope.height_i*2.54).round(2); //inch to cm
        }else{
            if ($scope.isFemale){
            	$scope.bmr = 655.1 + 9.563 * $scope.weight_m + 1.85 * $scope.height_m - 4.676 * $scope.age;
            } else {
            	$scope.bmr = 66.5 + 13.75 * $scope.weight_m + 5.003 * $scope.height_m - 6.755 * $scope.age;
            }
        	
        	$scope.weight_i = ($scope.weight_m/0.4536).round(2); //kg to lb
            $scope.height_i = ($scope.height_m/2.54).round(1); //cm to inch
            $scope.height_i_feet = parseInt($scope.height_i/12);
            $scope.height_i_inch = ($scope.height_i%12).round(2);
        }
        $scope.bmr = $scope.bmr.round(0);
		
		genUrl();
    };

    

    
    //
	function getFromUrl(){
		var url = document.location.href;
		var str;
		var data;
		if (url.indexOf("?value=") > 0){
			data = url.split("?value=")[1];	
			str = decodeURIComponent(data);
			str = str.split(",");
			
			$scope.isImperial = str[0].trim();
			$scope.isFemale = str[1].trim();
			if ($scope.isImperial === "1"){
				$scope.isImperial = true;
				if ($scope.isFemale === "1"){
					$scope.isFemale = true;
				} else {
					$scope.isFemale = false;
				}
				$scope.age = parseFloat(str[2]);
				$scope.weight_i = parseFloat(str[3]);
				$scope.height_i_feet = parseFloat(str[4]);
				$scope.height_i_inch = parseFloat(str[5]);
			}else{
				$scope.isImperial = false;
				if ($scope.isFemale === "1"){
					$scope.isFemale = true;
				} else {
					$scope.isFemale = false;
				}
				$scope.age = parseFloat(str[2]);
				$scope.weight_m = parseFloat(str[3]);
				$scope.height_m = parseFloat(str[4]);
			}
			$scope.calculate();
		} else
			return;
	}
	getFromUrl();
	
	//
	function genUrl(){
		var rt = document.location.href;
		var url = "";
		if (rt.indexOf("?value=") > 0)
			rt = rt.split("?value=")[0];
		
		rt += "?value=";

		console.log("sex=" + $scope.isFemale);
		console.log("m = " + $scope.isImperial);
		
		if ($scope.isImperial){
			url += "1, ";
			if ($scope.isFemale){
				url += "1, ";
			} else {
				url += "0, ";
			}
			url += $scope.age + ", ";
			url += $scope.weight_i + ", ";
			url += $scope.height_i_feet + ", ";
			url += $scope.height_i_inch + ", ";			
		} else {
			url += "0, ";
			if ($scope.isFemale){
				url += "1, ";
			} else {
				url += "0, ";
			}
			url += $scope.age + ", ";
			url += $scope.weight_m + ", ";
			url += $scope.height_m + ", ";			
		}
		
		rt += encodeURIComponent(url);
		jQuery(".shareUrl textarea").html(rt);
	}


}]);

//decimal round
Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
};
