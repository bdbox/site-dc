var app = angular.module("app", ["ngRoute", "pascalprecht.translate"]);

//
app.controller("navCtrl", ["$scope", "$location", function($scope, $location){

}]);//navCtrl controller


//column
app.controller("columnCtrl", ["$scope", function($scope){
    $scope.diameter = {v : 30, unit: "foot"};
    $scope.height = {v : 6, unit: "inch"};
    $scope.volume = 0;

    $scope.rates = {
        "foot" : 12,
        "inch"  : 1,
        "yard" : 36,
        "meter" : 39.3701,
        "centimeter"   : 0.393701
    };

    $scope.calc = function(){
        $scope.volume = Math.pow($scope.diameter.v / 2 * $scope.rates[$scope.diameter.unit], 2) * Math.PI *
            $scope.height.v * $scope.rates[$scope.height.unit];
    };

    $scope.calc();

}]);//columnCtrl controller


//tube
app.controller("tubeCtrl", ["$scope", function($scope){
    $scope.outerDiameter = {v : 30, unit: "foot"};
    $scope.innerDiameter = {v : 20, unit: "foot"};
    $scope.length = {v : 6, unit: "inch"};
    $scope.volume = 0;

    $scope.rates = {
        "foot" : 12,
        "inch"  : 1,
        "yard" : 36, 
        "meter" : 39.3701,
        "centimeter"   : 0.393701
    };

    $scope.calc = function(){
        $scope.volume = (Math.pow($scope.outerDiameter.v / 2 * $scope.rates[$scope.outerDiameter.unit], 2) * Math.PI -
			Math.pow($scope.innerDiameter.v / 2 * $scope.rates[$scope.innerDiameter.unit], 2) * Math.PI)  *
            $scope.length.v * $scope.rates[$scope.length.unit];
    };

    $scope.calc();

}]);//tubeCtrl controller

//slab
app.controller("slabCtrl", ["$scope", function($scope){
    $scope.length = {v : 30, unit: "foot"};
    $scope.width = {v : 10, unit: "foot"};
    $scope.height = {v : 6, unit: "inch"};
    $scope.volume = 0;

    $scope.rates = {
        "foot" : 12,
        "inch"  : 1,
        "yard" : 36,
        "meter" : 39.3701,
        "centimeter"   : 0.393701
    };

    $scope.calc = function(){
        $scope.volume = $scope.length.v * $scope.rates[$scope.length.unit] *
            $scope.width.v * $scope.rates[$scope.width.unit] *
            $scope.height.v * $scope.rates[$scope.height.unit];
    };

    $scope.calc();


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

}]);//tipCtrl controller

//
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/slab', {
                templateUrl: '/themes/nutley/js/concrete/partials/slab.html',
                controller: 'slabCtrl'
            }).
            when('/column', {
                templateUrl: '/themes/nutley/js/concrete/partials/column.html',
                controller: 'columnCtrl'
            }).
            when('/tube', {
                templateUrl: '/themes/nutley/js/concrete/partials/tube.html',
                controller: 'tubeCtrl'
            }).
            when('/', {
                templateUrl: '/themes/nutley/js/concrete/partials/slab.html',
                controller: 'slabCtrl'
            }).
            otherwise({
                redirectTo: '/themes/nutley/js/concrete/partials/slab.html',
                controller: 'slabCtrl'
            });
    }]);//config

app.config(["$translateProvider", function($translateProvider) {
	  $translateProvider.translations('en', {
		  LENGTH: 'Length',
		  WIDTH: 'Width',
		  HEIGHT: 'Height/Thickness',
		  DIAMETER: 'Diameter',
		  DEPTH: 'Height/Depth',
		  OUTERDIAMETER: 'Outer diameter',
		  INNERDIAMETER:'Inner diameter',
		  FOOT: 'foot',
		  INCH: 'inch',
		  YARD: 'yard',
		  METER: 'meter',
		  CENTIMETER: 'centimeter',
		    FEET3: 'cubic feet',
		    YARD3: 'cubic yards',
		    METER3: 'cubic meters',
		    RESULT: 'Result',
		    SLABS : 'Slabs',
		    COLUMNS: 'Columns',
		    TUBES: 'Tubes'
	  })
	  .translations('cn', {
		  LENGTH: '长度',
		  WIDTH: '宽度',
		  HEIGHT: '高度/厚度',
		  DIAMETER: '直径',
		  DEPTH: '深度',
		  OUTERDIAMETER: '外圆直径',
		  INNERDIAMETER:'內圆直径',		  
		  FOOT: '英尺',
		  INCH: '英寸',
		  YARD: '码',
		  METER: '米',
		  CENTIMETER: '厘米',
		    FEET3: '立方英尺',
		    YARD3: '立方码',
		    METER3: '立方米',
		    RESULT: '计算结果',
		    SLABS : '水泥板, 墙',
		    COLUMNS: '水泥圆柱',
		    TUBES: '水泥管'
	  });
	  //get current language
	  //$translateProvider.preferredLanguage('en');
	  var lang = 'en';
	  if (document.location.href.indexOf('/cn/') > 0) {
		  lang = 'cn';
	  }
	  $translateProvider.use(lang);
	}]);