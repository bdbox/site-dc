jQuery.noConflict();
(function($) {

	$(document).ready(function() {
		//
		$("#txtStart").datepicker();

		// all textbox
		$(":text", ".panel2").each(function() {
			$(this).click(function() {
				$(this).focus().select();
			});
		});

		//
		$("#calculateBtn").click(function() {
			calculate();
		});
		
		calculate();

		//
		$("#txtStart").change(function() {
			cancelReport();
		});

	});// ready

	function calculate() {
		var bday = new Date($("#txtStart").val());
			dd = bday.getDate();
			mm = bday.getMonth() + 1;
			yy = bday.getFullYear();
			
		days = new Date();
		gdate = days.getDate();
		gmonth = days.getMonth();
		gyear = days.getYear();
		if (gyear < 2000)
			gyear += 1900;
		age = gyear - yy;
		if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) {
			age = age;
		} else {
			if (mm <= (gmonth)) {
				age = age;
			} else {
				age = age - 1;
			}
		}
		if (age == 0){
			age = age;
			$("#age").html("<1");
		} else {
			$("#age").html(age);
		}
				
		
		if (mm <= (gmonth + 1))
			age = age - 1;
		if ((mm == (gmonth + 1)) && (dd > parseInt(gdate)))
			age = age + 1;
		var m;
		var n;
		if (mm == 12)
			n = 31 - dd;
		if (mm == 11)
			n = 61 - dd;
		if (mm == 10)
			n = 92 - dd;
		if (mm == 9)
			n = 122 - dd;
		if (mm == 8)
			n = 153 - dd;
		if (mm == 7)
			n = 184 - dd;
		if (mm == 6)
			n = 214 - dd;
		if (mm == 5)
			n = 245 - dd;
		if (mm == 4)
			n = 275 - dd;
		if (mm == 3)
			n = 306 - dd;
		if (mm == 2) {
			n = 334 - dd;
			if (leapyear(yy))
				n++;
		}
		if (mm == 1) {
			n = 365 - dd;
			if (leapyear(yy))
				n++;
		}
		if (gmonth == 1)
			m = 31;
		if (gmonth == 2) {
			m = 59;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 3) {
			m = 90;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 4) {
			m = 120;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 5) {
			m = 151;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 6) {
			m = 181;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 7) {
			m = 212;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 8) {
			m = 243;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 9) {
			m = 273;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 10) {
			m = 304;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 11) {
			m = 334;
			if (leapyear(gyear))
				m++;
		}
		if (gmonth == 12) {
			m = 365;
			if (leapyear(gyear))
				m++;
		}
		months = age * 12;
		months += 12 - parseInt(mm);
		months += gmonth + 1;
		totdays = (parseInt(age) * 365);
		totdays += age / 4;
		totdays = parseInt(totdays) + gdate + m + n;
		if (gmonth == 1)
			p = 31 + gdate;
		if (gmonth == 2) {
			p = 59 + gdate;
			if (leapyear(gyear))
				m = m + 1;
		}
		if (gmonth == 3) {
			p = 90 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 4) {
			p = 120 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 5) {
			p = 151 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 6) {
			p = 181 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 7) {
			p = 212 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 8) {
			p = 243 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 9) {
			p = 273 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 10) {
			p = 304 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 11) {
			p = 334 + gdate;
			if (leapyear(gyear))
				p++;
		}
		if (gmonth == 12) {
			p = 365 + gdate;
			if (leapyear(gyear))
				p++;
		}
		weeks = (age * 365) + n + p;
		weeks = weeks / 7;
		etcdays = parseFloat(weeks) - parseInt(weeks);
		etcdays = Math.round(etcdays * 7);
		weeks = parseInt(weeks);
		etcdays += parseInt(age / 4);
		if (etcdays > 7)
			weeks += parseInt(etcdays / 7);
		$("#weeks").html(weeks);
		$("#months").html(months);
		$("#days").html(totdays);
		var time = new Date();
		ghour = time.getHours();
		gmin = time.getMinutes();
		gsec = time.getSeconds();
		hour = ((age * 365) + n + p) * 24;
		hour += (parseInt(age / 4) * 24);
		$("#hours").html(hour);
		//reportStr += "     or " + hour + " hours<br />";
		var min = (hour * 60) + gmin;
		$("#minutes").html(min);
		//reportStr += "     or " + min + " minutes<br />";
		sec = (min * 60) + gsec;
		$("#seconds").html(sec);
		//reportStr += "     or " + sec + " seconds";
		mm = mm - 1;
		var r;
		if (mm == 0)
			r = 0;
		if (mm == 1)
			r = 31;
		if (mm == 2) {
			r = 59;
			if (leapyear(gyear))
				m++;
		}
		if (mm == 3) {
			r = 90;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 4) {
			r = 120;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 5) {
			r = 151;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 6) {
			r = 181;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 7) {
			r = 212;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 8) {
			r = 243;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 9) {
			r = 273;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 10) {
			r = 304;
			if (leapyear(gyear))
				r++;
		}
		if (mm == 11) {
			r = 334;
			if (leapyear(gyear))
				r++;
		}
		mm = mm + 1;
		r = parseInt(r) + parseInt(dd);

		if ((mm >= (gmonth + 1)) && (dd > gdate)) {
			bday = r - m - gdate;
		} else {
			if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) {
				a = 366;
			} else {
				a = 365;
			}
			bday = a + (r - m - gdate);
		}
		nhour = 24 - parseInt(ghour);
		nmin = 60 - parseInt(gmin);
		nsec = 60 - parseInt(gsec);
		while (bday > 366)
			bday -= 365;
		if (((bday == 366) && (leapyear(gyear)) || ((bday == 365) && (!leapyear(gyear))))) {
			$("#bday").html("Today is your birthday, happy birthday!");
			//reportStr += "<br /><br />Senlon Today is your birthday, happy birthday!！";
		} else {
			$("#toDays").html(bday);
			$("#toHours").html(nhour);
			$("#toMinutes").html(nmin);
			$("#toSeconds").html(nsec);
			//reportStr += "<br /><br />to your next birthday: <br />" + bday
				//	+ " days<br />" + nhour + " hours <br />" + nmin + " minutes <br />" + nsec + " seconds<br />";
			//setTimeout("calculate()", 1000);
		}
		
		//$(".summary").html(reportStr); 
	}
	function leapyear(a) {
		if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0))
			return true;
		else
			return false;
	}

	// specific days array
	var reportStr;

	function calculatee() {
		var startDay, endDay, days;
		reportStr = "";

		startDay = $("#txtStart").val();
		startDay = new Date(startDay);
		endDay = new Date();

		days = Math.abs((endDay.getTime() - startDay.getTime())
				/ (24 * 60 * 60 * 1000));

		if (days == 1)
			reportStr += "There are total <strong>" + days.toFixed(0)
					+ "</strong> day between <strong>";
		if (days > 1)
			reportStr += "There are total <strong>" + days.toFixed(0)
					+ "</strong> days between <strong>";

		reportStr += startDay.toLocaleString() + "</strong> and <strong>"
				+ endDay.toLocaleString() + "</strong>.<br />";

		if (days < 14 && days > 7) {
			reportStr += "That's <strong>" + Math.floor(days / 7)
					+ "</strong> week and <strong>";
			if (days % 7 == 1)
				reportStr += Math.round(days % 7) + "</strong> day.";
			else if (days % 7 > 1)
				reportStr += Math.round(days % 7) + "</strong> days.";
		} else if (days >= 14) {
			reportStr += "That's <strong>" + Math.floor(days / 7)
					+ "</strong> weeks and <strong>";
			if (days % 7 == 1)
				reportStr += Math.round(days % 7) + "</strong> day.";
			else if (days % 7 > 1)
				reportStr += Math.round(days % 7) + "</strong> days.";
		}

		doReport(days);
	}

	//
	function doReport(dt) {
		$("#report-context").html(reportStr);

	}

	//
	function cancelReport() {
		$("#reportDiv").datepicker("destroy");
		$("#report-context").html("");
	}

})(jQuery);