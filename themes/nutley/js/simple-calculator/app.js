	var nl = 0;
	var nm = false;
	var sO = "";
	var sP = "";
	var sL = "";	
	var r ;
	var p ;
	
	window.onload = init;

	function init(){
		r = document.getElementById("calcResult");
		p = document.getElementById("calcHistory");
	}

	function inputNum (num) {
		if (nm) {
			r.value  = num;
			nm = false;
			if(sO == "="){
				p.innerHTML = num;
			}else{
				p.innerHTML += num;	
			}
		}else {
			if (r.value == "0"){
				r.value = num;
				p.innerHTML = num;
			}else{
				r.value += num;	
				p.innerHTML += num;	
				
			}
		}
		sP = p.innerHTML;
	}


	function operate(opr)
	{
		if(!sP){
			return;
		}
		var Readout = r.value;
		if (nm && sO != "="){
			switch(opr)
			{
				case '+' :
				case '-' :			
					p.innerHTML = sP+opr;	
					break;
				case '×' :
				case '÷' :		
					p.innerHTML = "("+sP+")"+opr;
					break;
				default :
					break;
			}
			sO = opr;
		}else{
			nm = true;
			switch(sO)
			{
				case '+' :
					nl += parseFloat(Readout);
					break;
				case '-' :
					nl -= parseFloat(Readout);
					break;
				case '×' :
					nl *= parseFloat(Readout);
					break;
				case '÷' :
					nl /= parseFloat(Readout);
					break;
				default :
					nl = parseFloat(Readout);
					break;
			}
			switch(opr)
			{
				case '+' :
				case '-' :
					p.innerHTML += opr;
					break;
				case '×' :
				case '÷' :		
					if(sO == '×' || sO == '÷' || sO == ""){
						p.innerHTML += opr;
					}else{
						p.innerHTML = "("+p.innerHTML+")"+opr;
					}
					break;
				case '=' :
					break;
				default :
					break;
			}
			r.value = nl;
			sO = opr;
		}
	}

	function inputDecimal()
	{
		var value = r.value;
		if (nm) {
			value = "0.";
			p.innerHTML += "0.";
			nm = false;
		}else{
			if (value.indexOf(".") == -1){
				value += ".";
				if(p.innerHTML == ""){
					p.innerHTML = "0.";
				}else{
					p.innerHTML += "."; 
				}
			}
		}
		r.value = value;
	}

	function clearAll()
	{
		nl = 0;
		sO = "";
		r.value = "0";
		p.innerHTML = "";
		nm = true;
	}

	function negative() 
	{
		r.value = parseFloat(r.value) * -1;
		p.innerHTML = "-("+p.innerHTML+")";
	}	
