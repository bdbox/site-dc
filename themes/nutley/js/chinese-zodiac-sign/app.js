
(function($){
$(document).ready(function(){
	//
	$("#calculateBtn").click(function(){
		calculate();
	});
	
	//
	calculate();
	
	function calculate() {
		var toyear = 1997;
		var birthyear = $("#txtYear").val();
		var birthpet = "Ox";
		x = (toyear - birthyear) % 12;
		if ((x == 1) || (x == -11)) {
			birthpet = "Rat";
		} else {
			if (x == 0) {
				birthpet = "Ox";
			} else {
				if ((x == 11) || (x == -1)) {
					birthpet = "Tiger";
				} else {
					if ((x == 10) || (x == -2)) {
						birthpet = "Rabbit";
					} else {
						if ((x == 9) || (x == -3)) {
							birthpet = "Dragon";
						} else {
							if ((x == 8) || (x == -4)) {
								birthpet = "Snake";
							} else {
								if ((x == 7) || (x == -5)) {
									birthpet = "Horse";
								} else {
									if ((x == 6) || (x == -6)) {
										birthpet = "Goat";
									} else {
										if ((x == 5) || (x == -7)) {
											birthpet = "Monkey";
										} else {
											if ((x == 4) || (x == -8)) {
												birthpet = "Rooster";
											} else {
												if ((x == 3) || (x == -9)) {
													birthpet = "Dog";
												} else {
													if ((x == 2) || (x == -10)) {
														birthpet = "Pig";
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		$(".summary div").removeClass().addClass(birthpet.toLowerCase()); 
	}

});//ready

})(jQuery);