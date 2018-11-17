(function($){


$(document).ready(function(){
	var th = ['','thousand','million', 'billion','trillion'];
	var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
	 var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
	 var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

	function convert(s) {
	    s = s.toString();
	    s = s.replace(/[\, ]/g,'');
	    if (s != parseFloat(s)) {
	    	$("#errDiv").show();
	    	return;
	    }
	    var x = s.indexOf('.');
	    if (x == -1)
	        x = s.length;
	    if (x > 15){
	    	$("#errDiv2").show();
	    	return;
	    }
	    if (x === (s.length - 1)) {
	    	s = s.substring(0, x);
	    }
	    var n = s.split('');
	    var str = '';
	    var sk = 0;
	    for (var i=0;   i < x;  i++) {
	        if ((x-i)%3==2) {
	            if (n[i] == '1') {
	                str += tn[Number(n[i+1])] + ' ';
	                i++;
	                sk=1;
	            } else if (n[i]!=0) {
	                str += tw[n[i]-2] + ' ';
	                sk=1;
	            }
	        } else if (n[i]!=0) {
	            str += dg[n[i]] +' ';
	            if ((x-i)%3==0) str += 'hundred ';
	            sk=1;
	        }
	        if ((x-i)%3==1) {
	            if (sk)
	                str += th[(x-i-1)/3] + ' ';
	            sk=0;
	        }
	    }

	    if (x != s.length) {
	        var y = s.length;
	        str += 'point ';
	        for (var i=x+1; i<y; i++)
	            str += dg[n[i]] +' ';
	    }
	    return str.replace(/\s+/g,' ');
	}

	function isInteger(x) {
        return x % 1 === 0;
    }

	function showResult(){
		$(".hidd").hide();
		var result = "";
		var num = $('#inputNum').val();
		if (num != parseFloat(num) || num < 0){
			$('#errDiv').show();
			return;
		}
		if ($("#radioCheck").is(":checked")){
			if (isInteger(num)){
				result = convert(num) + " and 00/100 dollars";
			} else {
				var p1 = Math.floor(num);
				var p2 = Math.round((num - p1)*100);
				result = convert(p1) + " and " + p2 + "/100 dollars";
			}
		} else if ($("#radioCurrency").is(":checked")){
			if (isInteger(num)){
				result = convert(num) + " dollars";
			} else {
				var p1 = Math.floor(num);
				var p2 = Math.round((num - p1)*100);
				result = convert(p1) + " dollars and " + p2 + " cent(s)";
			}
		} else{
			 result = convert(num);
		}
		$('#result').html(result);

	}


	$('#inputNum').change(function(){
	    showResult();
	});
	$('#inputNum').keyup(function(){
	    showResult();
	});
	$('#appType input:radio').click(function(){
		showResult();
	});

	showResult();
});//ready

})(jQuery);
