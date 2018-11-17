(function($){

$(document).ready(function(){

	$("#wForm").submit(function() {
    var url = "/sites/all/modules/custom/keyword-density/check.php";
    $.ajax({
           type: "POST",
           url: url,
		   dataType: "json",
           data: $("#wForm").serialize(),
           success: function(data)
           {
			   var str = "";
			   if ($.isArray(data)) {
				   for (var i=0; i<data.length; i++){
					   var item = data[i];
						if (i === 0) {
							$("#totalWords").html(item["total words"]);
						} else {
							//console.log(item["keyword"]);
							str += "<tr><td>";
							str += item["keyword"];
							str += "</td><td>";
							str += item["count"];
							str += "</td><td>";
							str += item["percent"];
							str += "</td></tr>";
						}
				   }
			   }
			   $("#listTbl").html("").append(str);

           }
         });

    return false; // avoid to execute the actual submit of the form.
});
}); //ready


})(jQuery);
