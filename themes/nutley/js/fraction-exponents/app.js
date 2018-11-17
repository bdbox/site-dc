var app = angular.module("app", []);

app.controller("exCtrl", function($scope){
    $scope.base = 12;
    $scope.fractionTop = 3;
    $scope.fractionBtm = 4;
    $scope.result = 0;

    //
    $scope.calc = function(){
        $scope.result = Math.pow($scope.base, ($scope.fractionTop/$scope.fractionBtm));
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

    $scope.calc();


});//exCtrl controller
