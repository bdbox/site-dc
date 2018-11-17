jQuery.noConflict();
(function($) {

$(document).ready(function(){
	//radio
	$("#metricRadio").click(function(){
		$("span.unit").each(function(){
			if ($(this).html() == "(inch)")
				$(this).html("(cm)");
			else if ($(this).html() == "ft<sup>2</sup> per gallon")
				$(this).html("m<sup>2</sup> per litre");
									 
		});
	});
	$("#imperialRadio").click(function(){
		$("span.unit").each(function(){
			if ($(this).html() == "(cm)")
				$(this).html("(inch)");
			else if ($(this).html() == "m<sup>2</sup> per litre")
				$(this).html("ft<sup>2</sup> per gallon");
		});
	});
						   
	//add row button
	$(".addRoomBtn").on("click", function(){
		addRoom();								  
	});
	$(".addWindowBtn").on("click", function(){
		addWindow();								  
	});
	$(".addDoorBtn").on("click", function(){
		addDoor();								  
	});
		
	//all textbox
	$(":text", ".panel2").each(function(){
		$(this).click(function(){
			$(this).focus().select();					   
		});
	});	

	//
	$("#calculateBtn").click(function(){
		if (validate()) {
			calculate();	
		}
	});
	
	//
	$("#learnMore").click(function(){
		$(".learnMore").slideToggle();							   
	});
	$(".learnMore").click(function(){
		$(".learnMore").slideUp();							   
	});
			
});//ready

//
function validate(){
	var isGoodForm = true;
	
	$("input.c1, input.c2, input.c4").each(function(n){
		if (isNaN($(this).val())) {
			isGoodForm = false;
			$(this).css("color", "red");
			$("#err-msg").html("Invalid value entered.").show().delay(3000).fadeOut(1000);
		} else {
			$(this).css("color", "#000");
		}
		
	});
	
	return isGoodForm;
}//validate

function calculate(){ 
	var isMetric = false;
	var data = loadData();
	console.log(data);
	var reportStr = "";
	
	//
	$("#roomNum").html(data.room.length);
	data.wd.windows = 0;
	data.wd.doors = 0;
	data.area = {};	
	data.area.ceiling = 0;
	data.area.wall = 0;
	data.area.wd = 0;
	
	data.coverage = $("#otherVal").val();
	isMetric = $("#metricRadio:checked").length?true:false;
	
	var u1 = " sq. ft.";
	var u2 = " gallons";
	var factor = 144;
	if (isMetric){
		u1 = " sq. metres";
		u2 = " litres";
		factor = 10000;
	}
	
	for(var i = 0; i<data.wd.length; i++){
		if (data.wd[i][0] == "window")
			data.wd.windows++;
		else
			data.wd.doors++;
	}
	$("#winNum").html(data.wd.windows);
	$("#doorNum").html(data.wd.doors);

	for (var i=0; i<data.room.length; i++){
		var room = data.room[i];
		var areaWd = 0;
		var areaCeiling = 0;
		var areaWall = 0;
		var winNum = 0, doorNum = 0;
		reportStr += "<strong>" + room[0] + "</strong><br />";
		
		for (var j=0; j<data.wd.length; j++){
			var wd = data.wd[j];
			if (wd[1] == room[0]){
				areaWd += wd[2]*wd[3];
				if (wd[0] == "window")
					winNum++;
				else
					doorNum++;
			}
		}
		reportStr += "# of windows: " + winNum + "<br />";
		reportStr += "# of doors: " + doorNum + "<br />";;
		
		areaCeiling = room[1]*room[2];
		data.area.ceiling += areaCeiling;
		reportStr += "Area of ceiling: " + (areaCeiling/factor).toFixed(2) + u1 + "<br />";
		
		areaWall = ((room[2]*room[3] + room[1]*room[3])*2 - areaWd);
		data.area.wall = areaWall;
		reportStr += "Area of walls after subtract windows and doors: " + (areaWall/factor).toFixed(2) + u1 + "<br />";
	
	}
	
	$("#taCeiling").html((data.area.ceiling/factor).toFixed(2) + u1);
	$("#taWall").html((data.area.wall/factor).toFixed(2) + u1);
	$("#ptCeiling").html((data.area.ceiling/factor/data.coverage).toFixed(2) + u2);
	$("#ptWall").html((data.area.wall/factor/data.coverage).toFixed(2) + u2);


	doReport(reportStr);
}

//
function isEmpty(map) {
   for(var key in map) {
      if (map.hasOwnProperty(key)) {
         return false;
      }
   }
   return true;
}

//
function addRoom(){
	var template = $("#tableRow").html();
	var count = $(".formTable tbody tr.room").length + 1;
	template = template.replace("{peroid}", count);
	$(".formTable tbody").append(template);
}

//
function addWindow(){
	var template = $("#windowRow").html();
	if ($(".formTable tbody tr.wd").length == 0)
		$(".formTable tbody tr.room:last").after(template);
	else{
		var r = $(".formTable tbody tr").index($(".formTable tr.room:last"));
		var w = $(".formTable tbody tr").index($(".formTable tr.wd:last"));
		if (r < w)
			$(".formTable tbody tr.wd:last").after(template);
		else
			$(".formTable tbody tr.room:last").after(template);
	}
}

//
function addDoor(){
	var template = $("#doorRow").html();
	if ($(".formTable tbody tr.wd").length == 0)
		$(".formTable tbody tr.room:last").after(template);
	else{
		var r = $(".formTable tbody tr").index($(".formTable tr.room:last"));
		var w = $(".formTable tbody tr").index($(".formTable tr.wd:last"));
		if (r < w)
			$(".formTable tbody tr.wd:last").after(template);
		else
			$(".formTable tbody tr.room:last").after(template);
	}
}



//
function loadData(){
	var data = {};
	
	data.room = new Array();
	data.wd = new Array();
	data.net = new Array();
	
	var tempRoom  = new Array();
	var tempWd = new Array();
	
	$(".formTable tr.room").each(function(n){
		tempRoom.push($(".textBox-sm",this).val());
		$(".textBox", this).each(function(){
			tempRoom.push(parseFloat($(this).val()));
		});
		data.room.push(tempRoom);	
		tempRoom  = new Array();
	});
	$(".formTable tr.wd").each(function(n){
		tempWd.push($("td:first",this).html());
		tempWd.push($(this).prevAll("tr.room:first").find("input:first").val())
		$(".textBox", this).each(function(){
			tempWd.push(parseFloat($(this).val()));
		});
		data.wd.push(tempWd);	
		tempWd = new Array();
	});
	
	return data;
	
}

//
function doReport(str){
	$("#roomDetails").html("").append(str);
}


})(jQuery);