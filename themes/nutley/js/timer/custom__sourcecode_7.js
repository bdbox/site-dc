$(document).ready(function(){
var alarmTime = 0;
var now = 0;
var startTime = 0;
var status = "init";
var isTitle = true;
var inId;


	//clock
	function init ( )
	{
		$("#currentTime").html("");
	}
	
	function updateClock ( )
	{
		var currentTime = new Date ( );
		
		var currentHours = currentTime.getHours ( );
		var currentMinutes = currentTime.getMinutes ( );
		var currentSeconds = currentTime.getSeconds ( );
		
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
		
		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
		
		$("#currentTime").html(currentTime.toLocaleTimeString() + " " + currentTime.toLocaleDateString());
	}
	
	setInterval(function(){updateClock();}, 1000);
	
	//
	$("#txtHr, #txtMin, #txtSec").keyup(function(){
		var v = $(this).val();
		if (v < 0){
			$(this).val(-v);	
		}
		if (isNaN(v)){
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);	
			$(this).css("color", "red");
		} else {
			$(this).css("color", "#000");
		}
	});
	$("#txtHr, #txtMin, #txtSec").click(function(){
		$(this).select();										 
	});
	
	//
	$("#startBtn").click(function(){
		if ($(this).html() == "Start"){
			status = "running";
			isTitle = true;
			var sHr, sMin, sSec;
			sHr = $("#txtHr").val();
			sMin = $("#txtMin").val();
			sSec = $("#txtSec").val();
			
			if (isNaN(sHr)){
				sHr = 0;
				$("#txtHr").val(0);
			} else {
				sHr = Math.abs(sHr);
				$("#txtHr").val(sHr);
			}
			
			if (isNaN(sMin)){
				sMin = 0;
				$("#txtMin").val(0);
			} else {
				sMin = Math.abs(sMin);
				$("#txtMin").val(sMin);
			}
			
			if (isNaN(sSec)){
				sSec = 0;
				$("#txtSec").val(0);
			} else {
				sSec = Math.abs(sSec);
				$("#txtSec").val(sSec);
			}
			
			if (sHr == 0 && sMin == 0 && sSec == 0){
				$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
				return;
			}
			
			as[0].load(soundURL + soundName);
			var totalSecs = sHr*60*60 + sMin*60 + sSec;
			displayCountdown(totalSecs);
			
			startTime = new Date();
			alarmTime = totalSecs*1000;
			startTime = startTime.getTime();
			
			run();
			$(this).html("Stop").addClass("stop");;
			//$(".pause").attr("disabled", "disabled");
			
		} else {
			stopAlarm();
			//$(".pause").removeAttr("disabled");
		}
		
	});
	
	
	//
	function run(){
		inId = setInterval(function(){
			checkTime();					 
		}, 1000);
	}
	
	//
	function stopAlarm(){
		as[0].load(soundURL + soundName);
		status = "end";
		document.title = "Alarm Clock"
		$("#startBtn").html("Start").removeClass("stop");
		alarmTime = 0;
		isTitle = false;
		clearInterval(inId);
	}
	
	//
	function checkTime(){
		now = (new Date()).getTime();
		
		var duration = (alarmTime - (now - startTime))/1000;
		if (duration >= 0){
			displayCountdown(duration);
		} else {
			alarm();
		}
	}
	
	
	//
	function displayCountdown(totalSecs){
		var t1 = Math.floor(totalSecs/3600);
		var t2 = Math.floor((totalSecs%3600)/60);
		var t3 = Math.floor(totalSecs%60);
		$("#cd_h").text(t1);
		$("#cd_m").text(t2);
		$("#cd_s").text(t3);
		
		document.title = format(t1) + ":" + format(t2) + ":" + format(t3);
	}
	
	//
	function alarm(){
		var soundName =  $("#selectAudio").val();
		if (status == "running"){
			as[0].play();
		}
		if (isTitle){
			if (document.title != "♦♦♦ It's time! ♦♦♦"){
				document.title = "♦♦♦ It's time! ♦♦♦";
			} else {
				document.title = "Alert!";	
			}
		}
		
		$("#cd_h").text(0);
		$("#cd_m").text(0);
		$("#cd_s").text(0);
		status = "end";
		
	}
	
	//
	$("#selectAudio").change(function(){
		soundName = $(this).val();	
		as[0].load(soundURL + soundName);
	});
	

	//
	var as;
	audiojs.events.ready(function() {
		as = audiojs.createAll();
		as[0].load(soundURL + soundName);
		$(".pause").bind("click", function(){
			if ($(".pause:visible").length > 0 && status == "end")	{
				stopAlarm();
			}
		});
	});

	var soundURL = "sites/all/themes/business/js/timer/sounds/";
	var soundName = $("#selectAudio").val();

	//
	var timeoutId1, timeoutId2;
	$(".fs-open-btn").click(function(){
		$("#clock-container").fullscreen({toggleClass:"fullscreen"});								 
	});
	
	$(".lightness-adjustment").click(function(){
		$(".timerControl, .soundbox").clearQueue().stop().animate({"opacity": "0.1"});		
		$(this).clearQueue().stop().animate({"opacity":"0"});
	});
	
	$("#clock-container").bind("fscreenopen", function(){
		$(".timerControl, .soundbox").bind("mouseover", function(){
			$(this).clearQueue().stop().animate({"opacity":"1"});	
			$(".lightness-adjustment").animate({"opacity":"1"});
		});
	});
	
	//
	function format(a)	{
		if(a<10)
			{
			a="0"+a;
		};
		return a;
	}

	

	
});//ready
