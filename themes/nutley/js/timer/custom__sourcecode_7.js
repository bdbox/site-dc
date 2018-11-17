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
			sMin = $("#txtMin").val