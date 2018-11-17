// JavaScript Document
$(document).ready(function(){
	//
	$("#shiftBtn, #hypfBtn").click(function(){
		if ($(this).hasClass("selected")){
			$(this).removeClass("selected");	
		} else {
			$(this).addClass("selected");	
		}
		enterShift();
	});
	
	//
	$("#numeric").click(function(){
		if ($(this).val() == "Hex"){
			$(this).val("Decimal");
			enterChangCarry(10);
		} 
		else if ($(this).val() == "Decimal"){
			$(this).val("Octal");
			enterChangCarry(16);
		}
		else if ($(this).val() == "Octal"){
			$(this).val("Binary");
			enterChangCarry(2);
		}
		else if ($(this).val() == "Binary"){
			$(this).val("Hex");
			enterChangCarry(8);
		}
	});
	
	//
	$("#angle").click(function(){
		if ($(this).val() == "Degrees"){
			$(this).val("Radians");
			enterChangAngle("r");
		} 
		else if ($(this).val() == "Radians"){
			$(this).val("Degrees");
			enterChangAngle("d");
		}
	});
	
	//memory
	$("#ms").click(function(){
		setmemory();						
	});
	$("#mr").click(function(){
		getmemory();						
	});
	$("#mplus").click(function(){
		addmemory();						
	});
	$("#mminus").click(function(){
		minusmemory();						
	});
	$("#clearmenory").click(function(){
		clearmemory();						
	});
	
	//number
	$("#keyBack").click(function(){
		backspace();					
	});
	$("#keyCE").click(function(){
		$("#displayLED").val(0);				
	});
	$("#keyClear").click(function(){
		clearAll();					
	});
	$("#key7").click(function(){
		enterKey("7");					
	});
	$("#key8").click(function(){
		enterKey("8");					
	});
	$("#key9").click(function(){
		enterKey("9");					
	});
	$("#key4").click(function(){
		enterKey("4");					
	});
	$("#key5").click(function(){
		enterKey("5");					
	});
	$("#key6").click(function(){
		enterKey("6");					
	});
	$("#key1").click(function(){
		enterKey("1");					
	});
	$("#key2").click(function(){
		enterKey("2");					
	});
	$("#key3").click(function(){
		enterKey("3");					
	});
	$("#key0").click(function(){
		enterKey("0");					
	});
	$("#keyDot").click(function(){
		enterKey(".");					
	});
	
	//a-f
	$("#keya").click(function(){
		enterKey("a");					
	});
	$("#keyb").click(function(){
		enterKey("b");					
	});
	$("#keyc").click(function(){
		enterKey("c");					
	});
	$("#keyd").click(function(){
		enterKey("d");					
	});
	$("#keye").click(function(){
		enterKey("e");					
	});
	$("#keyf").click(function(){
		enterKey("f");					
	});

	//
	$("#pi").click(function(){
		enterFn("pi","pi");				
	});
	$("#e").click(function(){
		enterFn("e","e");					
	});
	$("#bt").click(function(){
		enterFn("dms","deg");					
	});
	$("#leftBracket").click(function(){
		addBracket();					
	});
	$("#rightBracket").click(function(){
		disBracket();					
	});
	$("#ln").click(function(){
		enterFn("ln","exp");					
	});
	$("#sin").click(function(){
		enterTrig("sin","arcsin","hypsin","ahypsin");					
	});
	$("#power").click(function(){
		cal("^",7);					
	});
	$("#log").click(function(){
		enterFn("log","expdec");					
	});
	$("#cos").click(function(){
		enterTrig("cos","arccos","hypcos","ahypcos");				
	});
	$("#cube").click(function(){
		enterFn("cube","cubt");					
	});
	$("#fr").click(function(){
		enterFn("!","!");					
	});
	$("#tan").click(function(){
		enterTrig("tan","arctan","hyptan","ahyptan");					
	});
	$("#sqr").click(function(){
		enterFn("sqr","sqrt");					
	});
	$("#mod").click(function(){
		cal("%",6);					
	});
	$("#floor").click(function(){
		enterFn("floor","deci");					
	});
	$("#lsh").click(function(){
		cal("<",4);					
	});
	$("#and").click(function(){
		cal("&",3);					
	});
	$("#or").click(function(){
		cal("|",1);					
	});
	$("#not").click(function(){
		enterFn("~","~");					
	});
	$("#xor").click(function(){
		cal("x",2);					
	});
	
	//
	$("#plusminus").click(function(){
		switchSign();					
	});
	$("#recip").click(function(){
		enterFn('recip','recip');					
	});
	$("#divide").click(function(){
		cal('/',6);					
	});
	$("#perc").click(function(){
		enterFn('perc','perc');					
	});
	$("#multiply").click(function(){
		cal('*',6);					
	});
	$("#radic").click(function(){
		enterFn('radic','radic');					
	});
	$("#minus").click(function(){
		cal('-',5);					
	});
	$("#equal").click(function(){
		result();					
	});
	$("#plus").click(function(){
		cal('+',5);					
	});




	//
	 LED = document.calc.display;
	
});//ready





var numberEnd=true;
var mem=0;
var carry=10;
var hexnum="0123456789abcdef";
var angle="d";
var stack="";
var level="0";
var layer=0;
var LED;


//数字键

function enterKey(key)
{
	var index=key.charCodeAt(0);
	if ((carry==2 && (index==48 || index==49))
	 || (carry==8 && index>=48 && index<=55)
	 || (carry==10 && (index>=48 && index<=57 || index==46))
	 || (carry==16 && ((index>=48 && index<=57) || (index>=97 && index<=102))))
	if(numberEnd)
	{
		numberEnd=false;
		LED.value = key;
	}
	else if(LED.value == null || LED.value == "0")
		LED.value = key;
	else
		LED.value += key;
}

function switchSign()
{
    if (LED.value!="0")
    	if(LED.value.substr(0,1) == "-")
        	LED.value = LED.value.substr(1);
    	else
        	LED.value = "-" + LED.value;
}

//函数键

function enterFn(fun,shiftfun)
{
	numberEnd=true;
	if ($("#shiftBtn").hasClass("selected")){
		LED.value=decto(funcalc(shiftfun,(todec(LED.value,carry))),carry);
	}
	else{
		LED.value=decto(funcalc(fun,(todec(LED.value,carry))),carry);
	}
	$("#shiftBtn").removeClass("checked");
	$("#hypfBtn").removeClass("checked");
	enterShift();
}

function enterTrig(trig,arctrig,hyp,archyp)
{
	if ($("#hypfBtn").hasClass("selected"))
		enterFn(hyp,archyp);
	else
		enterFn(trig,arctrig);
}


//运算符

function cal(join,newlevel)
{
	numberEnd=true;
	var temp=stack.substr(stack.lastIndexOf("(")+1)+LED.value;
	while (newlevel!=0 && (newlevel<=(level.charAt(level.length-1))))
	{
		temp=parse(temp);
		level=level.slice(0,-1);
	}
	if (temp.match(/^(.*\d[\+\-\*\/\%\^\&\|x])?([+-]?[0-9a-f\.]+)$/))
		LED.value=RegExp.$2;
	stack=stack.substr(0,stack.lastIndexOf("(")+1)+temp+join;
	$("#operatorMarker").val(" "+join+" ");
	level=level+newlevel;
	
}

//括号

function addBracket()
{
	numberEnd=true;
	LED.value=0;
	stack=stack+"(";
	$("#operatorMarker").val(" ");
	level=level+0;
	
	layer+=1;
	//$("#bracketMarker").val("(="+layer);
}

function disBracket()
{
	numberEnd=true;
	var temp=stack.substr(stack.lastIndexOf("(")+1)+LED.value;
	while ((level.charAt(level.length-1))>0)
	{
		temp=parse(temp);
		level=level.slice(0,-1);
	}
	
	LED.value=temp;
	stack=stack.substr(0,stack.lastIndexOf("("));
	$("#operatorMarker").val(" ");
	level=level.slice(0,-1);

	layer-=1;
	/*
	if (layer>0)
		$("#bracketMarker").val("(="+layer);
	else
		$("#bracketMarker").val("");
		*/
}

//等号

function result()
{
	numberEnd=true;
	while (layer>0)
		disBracket();
	var temp=stack+LED.value;
	while ((level.charAt(level.length-1))>0)
	{
		temp=parse(temp);
		level=level.slice(0,-1);
	}

	LED.value=temp;
	//$("#bracketMarker").val("");
	$("#operatorMarker").val("");
	stack="";
	level="0";
}


//修改键

function backspace()
{
	if (!numberEnd)
	{
		if(LED.value.length>1)
			LED.value=LED.value.substring(0,LED.value.length - 1);
		else
			LED.value=0;
	}
}

function clearAll()
{
	LED.value=0;
	numberEnd=true;
	stack="";
	level="0";
	layer="";
	$("#operatorMarker").val("");
	//$("#bracketMarker").val("");
}


//转换键

function enterChangCarry(newcarry)
{
	numberEnd=true;
	LED.value=(decto(todec(LED.value,carry),newcarry));
	carry=newcarry;

	$("#sin, #cos, #tan, #bt, #pi, #e, #keyDot").attr("disabled", (carry!=10));
	$("#key2, #key3, #key4, #key5, #key6, #key7, #key8, #key9").attr("disabled", (carry<=2));
	$("#keya, #keyb, #keyc, #keyd, #keye, #keyf").attr("disabled", (carry<=10));
	if (carry<=10)  
		$(".kbC").hide();
	else
		$(".kbC").show();
}

function enterChangAngle(angletype)
{
	numberEnd=true;
	angle=angletype;
	if (angle=="d")
		LED.value=radians2degrees(LED.value);
	else
		LED.value=degrees2radians(LED.value);
	numberEnd=true;
}

function enterShift()
{
	if ($("#shiftBtn").hasClass("selected"))
	{	
		document.calc.bt.value="deg";
		document.calc.ln.value="exp";
		document.calc.log.value="expd";
		
		if ($("#hypfBtn").hasClass("selected"))
		{
			document.calc.sin.value="ahs";
			document.calc.cos.value="ahc";
			document.calc.tan.value="aht";
		}
		else
		{
			document.calc.sin.value="asin";
			document.calc.cos.value="acos";
			document.calc.tan.value="atan";
		}
		
		document.calc.sqr.value="x^.5";
		document.calc.cube.value="x^.3";
;		document.calc.floor.value="Frac";
	}
	else
	{
		document.calc.bt.value="d.ms";
		document.calc.ln.value="ln";
		document.calc.log.value="log";

		if ($("#hypfBtn").hasClass("selected"))
		{
			document.calc.sin.value="hsin";
			document.calc.cos.value="hcos";
			document.calc.tan.value="htan";
		}
		else
		{
			document.calc.sin.value="sin";
			document.calc.cos.value="cos";
			document.calc.tan.value="tan";
		}
		
		document.calc.sqr.value="x^2";
		document.calc.cube.value="x^3";
;		document.calc.floor.value="Int";
	}

}
//存储器部分

function clearmemory()
{
	mem=0;
	$("#memoryMarker").val(" ");
}

function getmemory()
{
	numberEnd=true;
	LED.value=decto(mem,carry);
}

function setmemory()
{
	numberEnd=true;
	if (LED.value!=0)
	{
		mem=todec(LED.value,carry);
		$("#memoryMarker").val("M");
	}
	else
		$("#memoryMarker").val(" ");
}

function addmemory()
{
	numberEnd=true;
	mem=parseFloat(mem)+parseFloat(todec(LED.value,carry));
	if (mem==0)
		$("#memoryMarker").val(" ");
	else
		$("#memoryMarker").val("M");
}

function multimemory()
{
	numberEnd=true;
	mem=parseFloat(mem)*parseFloat(todec(LED.value,carry));
	if (mem==0)
		$("#memoryMarker").val(" ");
	else
		$("#memoryMarker").val("M");
}

function minusmemory()
{
	numberEnd=true;
	mem=parseFloat(mem)-parseFloat(todec(LED.value,carry));
	if (mem==0)
		$("#memoryMarker").val(" ");
	else
		$("#memoryMarker").val("M");
}

//十进制转换

function todec(num,oldcarry)
{
	if (oldcarry==10 || num==0) return(num);
	var neg=(num.charAt(0)=="-");
	if (neg) num=num.substr(1);
	var newnum=0;
	for (var index=1;index<=num.length;index++)
		newnum=newnum*oldcarry+hexnum.indexOf(num.charAt(index-1));
	if (neg)
		newnum=-newnum;
	return(newnum);
}

function decto(num,newcarry)
{
	var neg=(num<0);
	if (newcarry==10 || num==0) return(num);
	num=""+Math.abs(num);
	var newnum="";
	while (num!=0)
	{
		newnum=hexnum.charAt(num%newcarry)+newnum;
		num=Math.floor(num/newcarry);
	}
	if (neg)
		newnum="-"+newnum;
	return(newnum);
}

//表达式解析

function parse(string)
{
	if (string.match(/^(.*\d[\+\-\*\/\%\^\&\|x\<])?([+-]?[0-9a-f\.]+)([\+\-\*\/\%\^\&\|x\<])([+-]?[0-9a-f\.]+)$/))
		return(RegExp.$1+cypher(RegExp.$2,RegExp.$3,RegExp.$4));
	else
		return(string);
}

//数学运算和位运算

function cypher(left,join,right)
{
	left=todec(left,carry);
	right=todec(right,carry);
	if (join=="+")
		return(decto(parseFloat(left)+parseFloat(right),carry));
	if (join=="-")
		return(decto(left-right,carry));
	if (join=="*")
		return(decto(left*right,carry));
	if (join=="/" && right!=0)
		return(decto(left/right,carry));
	if (join=="%")
		return(decto(left%right,carry));
	if (join=="&")
		return(decto(left&right,carry));
	if (join=="|")
		return(decto(left|right,carry));
	if (join=="^")
		return(decto(Math.pow(left,right),carry));

	if (join=="x")
		return(decto(left^right,carry));
	if (join=="<")
		return(decto(left<<right,carry));
	alert("Divider cannot be zero.");
	return(left);
}

//函数计算

function funcalc(fun,num)
{
	with(Math)
	{
		if (fun=="pi")
			return(PI);
		if (fun=="e")
			return(E);

		if (fun=="abs")
			return(abs(num));
		if (fun=="ceil")
			return(ceil(num));
		if (fun=="round")
			return(round(num));

		if (fun=="floor")
			return(floor(num));
		if (fun=="deci")
			return(num-floor(num));


		if (fun=="ln" && num>0)
			return(log(num));
		if (fun=="exp")
			return(exp(num));
		if (fun=="log" && num>0)
			return(log(num)*LOG10E);
		if (fun=="expdec")
			return(pow(10,num));

		
		if (fun=="cube")
			return(num*num*num);
		if (fun=="cubt")
			return(pow(num,1/3));
		if (fun=="sqr")
			return(num*num);
		if (fun=="sqrt" && num>=0)
			return(sqrt(num));

		if (fun=="!")
			return(factorial(num));

		if (fun=="recip" && num!=0)
			return(1/num);
		if (fun=="perc")
			return(num/100);
		if (fun=="radic" && num>=0)
			return(Math.sqrt(num));

		if (fun=="dms")
			return(dms(num));
		if (fun=="deg")
			return(deg(num));

		if (fun=="~")
			return(~num);
	
		if (angle=="d")
		{
			if (fun=="sin")
				return(sin(degrees2radians(num)));
			if (fun=="cos")
				return(cos(degrees2radians(num)));
			if (fun=="tan")
				return(tan(degrees2radians(num)));

			if (fun=="arcsin" && abs(num)<=1)
				return(radians2degrees(asin(num)));
			if (fun=="arccos" && abs(num)<=1)
				return(radians2degrees(acos(num)));
			if (fun=="arctan")
				return(radians2degrees(atan(num)));
		}
		else
		{
			if (fun=="sin")
				return(sin(num));
			if (fun=="cos")
				return(cos(num));
			if (fun=="tan")
				return(tan(num));

			if (fun=="arcsin" && abs(num)<=1)
				return(asin(num));
			if (fun=="arccos" && abs(num)<=1)
				return(acos(num));
			if (fun=="arctan")
				return(atan(num));
		}
	
		if (fun=="hypsin")
			return((exp(num)-exp(0-num))*0.5);
		if (fun=="hypcos")
			return((exp(num)+exp(-num))*0.5);
		if (fun=="hyptan")
			return((exp(num)-exp(-num))/(exp(num)+exp(-num)));

		if (fun=="ahypsin" | fun=="hypcos" | fun=="hyptan")
		{
			alert("Error.");
			return(num);
		}
		
		alert("Not supportted at this time.");
		return(num);
	}
}

function factorial(n)
{
	n=Math.abs(parseInt(n));
	var fac=1;
	for (;n>0;n-=1)
		fac*=n;
	return(fac);
}

function dms(n)
{
	var neg=(n<0);
	with(Math)
	{	
		n=abs(n);
		var d=floor(n);
		var m=floor(60*(n-d));
		var s=(n-d)*60-m;
	}
	var dms=d+m/100+s*0.006;
	if (neg) 
		dms=-dms;
	return(dms);
}

function deg(n)
{
	var neg=(n<0);
	with(Math)
	{
		n=abs(n);
		var d=floor(n);
		var m=floor((n-d)*100);
		var s=(n-d)*100-m;
	}
	var deg=d+m/60+s/36;
	if (neg) 
		deg=-deg;
	return(deg);
}

function degrees2radians(degress)
{
	return(degress*Math.PI/180);
}

function radians2degrees(radians)
{
	return(radians*180/Math.PI);
}

