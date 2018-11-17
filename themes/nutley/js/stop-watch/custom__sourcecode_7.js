jQuery.noConflict();
(function($) {

$(document).ready(function(){	
	
	//
	$("#startBtn").click(function(){
		if ($(this).html() == "start"){
			initClock();
			$(this).html("pause");
			$("#endBtn").html("stop");
		} else if ($(this).html() == "pause"){
			pauseClock();
			doReport("resume");
			$(this).html("resume");
		}  else if ($(this).html() == "resume"){
			resumeClock();
			$(this).html("pause");
		}
		//$(this).attr("disabled","disabled");
	});
	
	$("#splitBtn").click(function(){
		if (running && !pause){
			doReport("split");
		} 
	});
	
	$("#endBtn").click(function(){
		if (running){
			doReport();
			$(this).html("reset");
			$("#startBtn").html("start");
		} else {
			reset();
			$(this).html("stop")
		}
		stopClock();
	});
	
	//
	$("#fs-open-btn").click(function(){
		$("#clock-container").fullscreen({toggleClass:"fullscreen"});
	});
	
	
});//ready







var countingA = 0;
var timerID = null;
var running = false, pause = false;
var dHrs, dMins, dSecs, dmSecs;
var mem;
var countingM, countingC=0;

function initClock(){
	var now = new Date();
	countingA = parseFloat(now.getTime());
	stopClock();
	startClock();
	$("#hh, #mm, #ss, #ms").text("00");
}

function stopClock(){
    if(running){
        clearTimeout(timerID);
	}
    running = false;
	pause = false;
}

function startClock(){
	var dmSecs2 = "";
    var now2 = new Date();
	var countingB = parseFloat(now2.getTime());
	var diff = countingB-countingA;
	dHrs = Math.floor(diff/(1000*60*60));
   	dMins = Math.floor((diff-(dHrs*1000*60*60))/(1000*60));
   	dSecs = Math.floor((diff-((dHrs*1000*60*60)+(dMins*1000*60)))/1000);
   	dmSecs = diff - ((dHrs*1000*60*60)+(dMins*60000) + (dSecs*1000));

	dmSecs = Math.floor(dmSecs/10);
	dmSecs2 = format(dmSecs);
	
	$("#hh").text(format(dHrs));
	$("#mm").text(format(dMins));
	$("#ss").text(format(dSecs) + ".");
	$("#ms").text(dmSecs2);
	
    running = true;
    timerID = self.setTimeout(function(){startClock();}, 0);
	pause = false;
}

function resumeClock(){
	var dmSecs2 = "";
    var now2 = new Date();
	var countingB = parseFloat(now2.getTime());
	if (countingC == 0){
		countingC = countingB;
	}
	var diff = countingB-countingC+countingM;
	dHrs = Math.floor(diff/(1000*60*60));
   	dMins = Math.floor((diff-(dHrs*1000*60*60))/(1000*60));
   	dSecs = Math.floor((diff-((dHrs*1000*60*60)+(dMins*1000*60)))/1000);
   	dmSecs = diff - ((dHrs*1000*60*60)+(dMins*60000) + (dSecs*1000));

	dmSecs = Math.floor(dmSecs/10);
	dmSecs2 = format(dmSecs);

	
	$("#hh").text(format(dHrs));
	$("#mm").text(format(dMins));
	$("#ss").text(format(dSecs) + ".");
	$("#ms").text(dmSecs2);
	
    running = true;
    timerID = self.setTimeout(function(){wait = 0; resumeClock();}, 0);
	pause = false;
}

function pauseClock(){
    if(running){
        clearTimeout(timerID);
	}
	mem = new Array();
	mem.push(dHrs);
	mem.push(dMins);
	mem.push(dSecs);
	mem.push(dmSecs*10);
	countingM = mem[0]*60*60*1000 + mem[1]*60*1000 + mem[2]*1000 + mem[3];
	countingC = 0;
	pause = true;
}


function format(n)	{
	if(n < 10){
		return "0"+ n;
	}else{
		return n;
	}
}
	
	
function doReport(r){
	var str = "";
	if (r){
		str += "<li class='" + r + "'>";
	}else{
		str += "<li>";
	}
	str += dHrs + " hrs ";
	str += dMins + " mins ";
	str += dSecs + "." + dmSecs + " secs."
	str += "</li>";
	
	$(".summary").append(str);
}

function reset(){
	$("#hh").text("00");	
	$("#mm").text("00");	
	$("#ss").text("00");	
	$("#ms").text("00");	
	$(".summary").html("");
}
	
})(jQuery);
