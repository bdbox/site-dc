var app = angular.module('bmi', ['ui.bootstrap', 'highcharts-ng']);

app.controller('bmiCtrl', ["$scope", function($scope){
    

    $scope.weight_i = 122;
    $scope.height_i_feet = 5;
    $scope.height_i_inch = 3;
    $scope.height_i = 63;
    $scope.weight_m = 55;
    $scope.height_m = 160;
    $scope.isImperial = true;
    $scope.bmi = 21.6;
	$scope.country = "United States";
	
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
            $scope.bmi = $scope.weight_i/$scope.height_i/$scope.height_i*703;
            $scope.weight_m = ($scope.weight_i*0.4536).round(2); //lb to kg
            $scope.height_m = ($scope.height_i*2.54).round(2); //inch to cm
        }else{
            $scope.bmi = $scope.weight_m/$scope.height_m/$scope.height_m*10000;
            $scope.weight_i = ($scope.weight_m/0.4536).round(2); //kg to lb
            $scope.height_i = ($scope.height_m/2.54).round(1); //cm to inch
            $scope.height_i_feet = parseInt($scope.height_i/12);
            $scope.height_i_inch = ($scope.height_i%12).round(2);
        }
        $scope.bmi = $scope.bmi.round(1);
        $scope.chartConfig.series[0].data[0] = $scope.bmi;
		
		genUrl();
    };

    $scope.chartSeries = [{
        name: 'BMI',
        data: [21.6]
    }];

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
				backgroundColor: 'transparent',
				height: 300
            },
			pane: {
				startAngle: -140,
            	endAngle: 140
			}
        },
        pane: {
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 50,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'BMI'
            },
            plotBands: [{
                from: 0,
                to: 18.5,
                color: '#DDDF0D' // green
            }, {
                from: 18.5,
                to: 24.9,
                color: '#55BF3B' // yellow
            }, {
                from: 25,
                to: 29.9,
                color: '#DFa3a3' // red
            }, {
                from: 30,
                to: 50,
                color: '#DF5353' // red
            }]
        },
        series: [{
            name: 'BMI',
            data: [21.6]
        }],
        title: {
            text: ''
        },
        credits: {
            enabled: false
        }
    };
	
	//
	$scope.cData = {
    "Afghanistan":[21.01,21.36,20.65,1.034],
    "Albania":[24.53,27.6,21.45,1.287],
    "Algeria":[23.87,24.38,23.36,1.044],
    "Angola":[22.73,23.24,22.22,1.046],
    "Argentina":[26.44,27.76,25.11,1.106],
    "Armenia":[24.26,25.72,22.8,1.128],
    "Australia":[26.1,27.24,24.95,1.092],
    "Austria":[25,26.97,23.03,1.171],
    "Azerbaijan":[24.65,26.21,23.08,1.136],
    "Bahamas":[27.09,27.6,26.57,1.039],
    "Bahrain":[26.33,27.97,24.69,1.133],
    "Bangladesh":[20.32,21,19.63,1.07],
    "Barbados":[27.7,26.84,28.55,0.94],
    "Belarus":[26.72,26.32,27.11,0.971],
    "Belgium":[24.15,25.93,22.36,1.16],
    "Belize":[26.09,26.6,25.58,1.04],
    "Benin":[22.48,22.52,22.43,1.004],
    "Bhutan":[20.37,20.88,19.85,1.052],
    "Bolivia":[25.86,26.07,25.65,1.016],
    "Bosnia and Herzegovina":[23.94,26.18,21.69,1.207],
    "Botswana":[24.45,24.96,23.94,1.043],
    "Brazil":[24.79,25.85,23.72,1.09],
    "Brunei":[22.67,23.18,22.16,1.046],
    "Bulgaria":[23.77,26.53,21.01,1.263],
    "Burkina Faso":[21.25,21.86,20.64,1.059],
    "Burundi":[20.4,20.91,19.89,1.051],
    "Cambodia":[21.51,22.3,20.72,1.076],
    "Cameroon":[24.7,26.65,22.75,1.171],
    "Canada":[25.7,27.04,24.36,1.11],
    "Cape Verde":[23.44,23.95,22.93,1.044],
    "Central African Republic":[20.99,20.97,21.01,0.998],
    "Chad":[21.42,22.04,20.8,1.06],
    "Chile":[26.05,25.94,26.15,0.992],
    "China":[22.86,23.78,21.93,1.084],
    "Colombia":[24.94,26.3,23.58,1.115],
    "Comoros":[22.99,23.39,22.59,1.035],
    "Congo":[21.91,22.3,21.52,1.036],
    "Costa Rica":[24.87,26.06,23.68,1.101],
    "Côte d'Ivoire":[22.03,21.64,22.42,0.965],
    "Croatia":[26.61,30.21,23,1.313],
    "Cuba":[25.64,26.78,24.49,1.094],
    "Cyprus":[26.7,27.21,26.18,1.039],
    "Czech Republic":[23.78,26.5,21.06,1.258],
    "Denmark":[24.24,25.75,22.73,1.133],
    "Djibouti":[22.96,23.47,22.44,1.046],
    "Dominican Republic":[25.45,25.55,25.34,1.008],
    "DR Congo":[20.25,20.76,19.74,1.052],
    "East Timor":[20.72,21.23,20.2,1.051],
    "Ecuador":[25.58,26.09,25.06,1.041],
    "Egypt":[26.7,27.14,26.25,1.034],
    "El Salvador":[25.8,26.31,25.28,1.041],
    "Equatorial Guinea":[24.75,25.26,24.24,1.042],
    "Eritrea":[19.85,20.27,19.43,1.043],
    "Estonia":[23.06,25.21,20.9,1.206],
    "Ethiopia":[20.46,20.97,19.94,1.052],
    "Fiji":[24.99,25.25,24.72,1.021],
    "Finland":[25.06,26.76,23.36,1.146],
    "France":[23.56,24.9,22.22,1.121],
    "Gabon":[23.4,23.75,23.05,1.03],
    "Gambia":[21.73,21.94,21.52,1.02],
    "Georgia":[25.27,25.78,24.75,1.042],
    "Germany":[25.32,27.17,23.46,1.158],
    "Ghana":[23.15,24.64,21.65,1.138],
    "Greece":[26.13,27.68,24.57,1.127],
    "Grenada":[26.43,26.94,25.91,1.04],
    "Guatemala":[25.88,26.42,25.34,1.043],
    "Guinea":[22.06,22.41,21.71,1.032],
    "Guinea-Bissau":[21.04,21.55,20.53,1.05],
    "Guyana":[25.1,25.61,24.59,1.041],
    "Haiti":[23.12,22.21,24.03,0.924],
    "Honduras":[25.12,25.63,24.61,1.041],
    "Hungary":[24.45,26.5,22.39,1.184],
    "Iceland":[25.93,26.8,25.06,1.069],
    "India":[21.05,22.5,19.6,1.148],
    "Indonesia":[21.59,21.91,21.26,1.031],
    "Iran":[24.28,25.21,23.35,1.08],
    "Iraq":[24.53,25.04,24.01,1.043],
    "Ireland":[24.4,26.14,22.65,1.154],
    "Israel":[25.05,26.72,23.37,1.143],
    "Italy":[23.49,25.78,21.19,1.217],
    "Jamaica":[26.21,24.82,27.6,0.899],
    "Japan":[21.93,23.52,20.34,1.156],
    "Jordan":[25.09,26.65,23.52,1.133],
    "Kazakhstan":[22.99,25.02,20.96,1.194],
    "Kenya":[21.41,21.59,21.23,1.017],
    "Kuwait":[27.92,28.77,27.07,1.063],
    "Kyrgyzstan":[22.9,23.99,21.8,1.1],
    "Laos":[21.99,22.5,21.48,1.047],
    "Latvia":[23.73,25.38,22.07,1.15],
    "Lebanon":[24.57,26.6,22.54,1.18],
    "Lesotho":[24.56,22.96,26.16,0.878],
    "Liberia":[21,21.51,20.49,1.05],
    "Libya":[26.06,26.57,25.55,1.04],
    "Lithuania":[24.29,26.44,22.14,1.194],
    "Luxembourg":[25.06,25.6,24.51,1.044],
    "Macedonia":[23.81,24.25,23.36,1.038],
    "Madagascar":[21.6,22.31,20.89,1.068],
    "Malawi":[21.96,22.02,21.9,1.005],
    "Malaysia":[22.58,23.06,22.09,1.044],
    "Maldives":[22.21,23.54,20.88,1.127],
    "Mali":[22.18,22.11,22.24,0.994],
    "Malta":[26.04,27.91,24.17,1.155],
    "Mauritania":[23.74,24.17,23.3,1.037],
    "Mauritius":[24.46,25.05,23.87,1.049],
    "Mexico":[26.54,27.7,25.37,1.092],
    "Micronesia":[32.82,32.8,32.84,0.999],
    "Moldova":[25.24,25.75,24.73,1.041],
    "Mongolia":[25.94,24.78,27.1,0.914],
    "Morocco":[23.76,23.71,23.8,0.996],
    "Mozambique":[21.27,21.27,21.27,1],
    "Myanmar":[22.4,22.91,21.89,1.047],
    "Namibia":[22,22.01,21.99,1.001],
    "Nepal":[20.55,20.82,20.27,1.027],
    "Netherlands":[24.14,25.72,22.56,1.14],
    "New Zealand":[26.61,27.55,25.67,1.073],
    "Nicaragua":[25.61,25.83,25.38,1.018],
    "Niger":[21.49,22.27,20.71,1.075],
    "Nigeria":[22.88,23.98,21.77,1.102],
    "North Korea":[20.78,21.29,20.27,1.05],
    "Norway":[24.69,26.28,23.1,1.138],
    "Oman":[24.15,25.41,22.89,1.11],
    "Pakistan":[21.53,21.92,21.14,1.037],
    "Panama":[26.16,26.67,25.65,1.04],
    "Papua New Guinea":[23.79,23.16,24.41,0.949],
    "Paraguay":[25.32,25.83,24.81,1.041],
    "Peru":[25.23,25.87,24.59,1.052],
    "Philippines":[22.35,22.73,21.96,1.035],
    "Poland":[23.21,25.88,20.54,1.26],
    "Portugal":[24.59,26.49,22.69,1.167],
    "Qatar":[27.47,27.98,26.96,1.038],
    "Romania":[22.98,24.62,21.33,1.154],
    "Russian Federation":[23.25,24.8,21.69,1.143],
    "Rwanda":[21.67,21.15,22.19,0.953],
    "Saint Lucia":[25.23,24.59,25.86,0.951],
    "Samoa":[28.34,28.79,27.88,1.033],
    "São Tomé and Príncipe":[21.75,22.26,21.24,1.048],
    "Saudi Arabia":[26.11,27.88,24.33,1.146],
    "Senegal":[22.68,23.73,21.62,1.098],
    "Sierra Leone":[23.45,23.87,23.03,1.036],
    "Singapore":[22.19,22.8,21.58,1.057],
    "Slovakia":[25.34,25.85,24.83,1.041],
    "Slovenia":[25.38,25.89,24.87,1.041],
    "Solomon Islands":[27.34,27.85,26.83,1.038],
    "Somalia":[20.48,20.99,19.97,1.051],
    "South Africa":[24.96,24.95,24.97,0.999],
    "South Korea":[24.06,25.34,22.78,1.112],
    "Spain":[24.52,26.47,22.57,1.173],
    "Sri Lanka":[20.51,21.44,19.57,1.096],
    "St Vincent and the Grenadines":[26.04,26.55,25.53,1.04],
    "Sudan":[21.97,22.48,21.46,1.048],
    "Suriname":[25.71,26.22,25.2,1.04],
    "Swaziland":[23.39,23.9,22.88,1.045],
    "Sweden":[24.54,26.11,22.97,1.137],
    "Switzerland":[24.94,25.47,24.4,1.044],
    "Syria":[25,25.51,24.49,1.042],
    "Tajikistan":[25.21,25.72,24.7,1.041],
    "Tanzania":[21.83,21.87,21.78,1.004],
    "Thailand":[22.34,23.36,21.32,1.096],
    "Togo":[22.22,22.72,21.72,1.046],
    "Tonga":[32.9,32.03,33.77,0.948],
    "Trinidad and Tobago":[26.9,26.46,27.33,0.968],
    "Tunisia":[23.86,24.63,23.08,1.067],
    "Turkey":[24.92,25.33,24.5,1.034],
    "Turkmenistan":[23.55,25.13,21.96,1.144],
    "Uganda":[21.53,21.03,22.02,0.955],
    "Ukraine":[23.34,24.84,21.84,1.137],
    "United Arab Emirates":[26.66,27.6,25.71,1.074],
    "United Kingdom":[26.19,27.62,24.76,1.116],
    "United States":[27.82,28.64,27,1.061],
    "Uruguay":[25.06,26.88,23.24,1.157],
    "Uzbekistan":[23.8,24.99,22.6,1.106],
    "Vanuatu":[25.53,26.46,24.6,1.076],
    "Venezuela":[26.19,27.52,24.86,1.107],
    "Vietnam":[19.96,21.18,18.73,1.131],
    "Yemen":[22.07,22.91,21.22,1.08],
    "Zambia":[21.02,21.02,21.01,1],
    "Zimbabwe":[22.38,21.7,23.06,0.941]
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
			if ($scope.isImperial === 1){
				$scope.isImperial = true;
				$scope.weight_i = parseFloat(str[1]);
				$scope.height_i_feet = parseFloat(str[2]);
				$scope.height_i_inch = parseFloat(str[3]);
				$scope.country = str[4].trim();
			}else{
				$scope.isImperial = false;
				$scope.weight_m = parseFloat(str[1]);
				$scope.height_m = parseFloat(str[2]);
				$scope.country = str[3].trim();
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
		if ($scope.isImperial){
			url += "1, ";
			url += $scope.weight_i + ", ";
			url += $scope.height_i_feet + ", ";
			url += $scope.height_i_inch + ", ";			
		} else {
			url += "0, ";
			url += $scope.weight_m + ", ";
			url += $scope.height_m + ", ";			
		}
		url += $scope.country;
		
		rt += encodeURIComponent(url);
		jQuery(".shareUrl textarea").html(rt);
	}


}]);

//decimal round
Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
};
