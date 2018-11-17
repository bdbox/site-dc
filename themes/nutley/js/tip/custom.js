var app = angular.module("app", []);

        app.controller("tipCtrl", function($scope){
            $scope.amount = 125.75;
            $scope.percent = 15;
            $scope.people = 4;
            $scope.tax = 7;
            $scope.roundTo = false;
            $scope.result = 0;
            $scope.total = 0;
            $scope.totalTax = 0;
            $scope.totalTip = 0;
            $scope.actualPercent = 0;
            $scope.rounding = "up";

            //
            $scope.calc = function(){
                $scope.totalTax = $scope.amount * $scope.tax/100;
                $scope.totalTip = $scope.amount * $scope.percent/100;
                $scope.total = $scope.totalTax + $scope.totalTip + $scope.amount;
                $scope.result = $scope.total / $scope.people;
                $scope.actualPercent = $scope.percent;
                if ($scope.roundTo){
                    if ($scope.rounding === "up"){
                        $scope.result = Math.ceil($scope.total / $scope.people);
                    } else {
                        $scope.result = Math.floor($scope.total / $scope.people);
                    }

                    $scope.total = $scope.result * $scope.people;
                    $scope.totalTip = $scope.total - $scope.amount - $scope.totalTax;
                    $scope.actualPercent = $scope.totalTip / $scope.amount * 100;
                }
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
            function useData(data){
                $scope.amount = data[0] ? data[0] : $scope.amount;
                $scope.percent = data[1] ? data[1] : $scope.percent;
                $scope.people = data[2] ? data[2] : $scope.people;
                $scope.tax = data[3] ? data[3] : $scope.tax;
            }

            gup("data");
            $scope.calc();


        });//tipCtrl controller