var app = angular.module("app", []);

app.controller("timeCtrl", function($scope){
    $scope.tm = 5.75;
    $scope.unit = "hour";
    $scope.hr = 0;
    $scope.min = 0;
    $scope.sec = 0;
	$scope.msec = 0;
    $scope.result = {};

    //
    $scope.calc = function(){
        var c = 0.864;
        var n = 10000;
        if ($scope.unit === "minute"){
            n = 100;
        }
        if ($scope.unit === "second"){
            n = 1;
        }

        $scope.hr = Math.floor(($scope.tm * n * c) / 3600);
        $scope.min = Math.floor((($scope.tm * n * c) % 3600) / 60);
        $scope.sec = Math.floor(($scope.tm * n * c) % 60);
		$scope.msec = Math.round((($scope.tm * n * c) % 60 - $scope.sec)*1000);
		
		$scope.result.hh = checkTime($scope.hr);
		$scope.result.mm = checkTime($scope.min);
		$scope.result.ss = checkTime($scope.sec);
		$scope.result.sss = checkT($scope.msec);
		
		
    };

    //
    function gup( name )
    {
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null ){
            return null;
        } else {
            useData(results[1]);
            return results[1];
        }
    }
	
	//
	function checkTime(i) {
    if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	//
	function checkT(i) {
	if (i < 10) {
			i = "00" + i;
		}else if (i<100){
		 	i = "0" + i;	
		}else{
			i = i.toString();	
		}
		return i.substring(0,3);
	}

    $scope.calc();


});//timeCtrl controller
