<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Auto Loan Questions</title>
<meta name="description" content="questions asked about auto/car loan.">
<link rel="stylesheet" type="text/css" href="../styles/style-new.css">
<link rel="stylesheet" type="text/css" href="../styles/custom.css">
<script src="../js/jquery-1.7.2.min.js" type="text/javascript"></script>
  <script type='text/javascript'>
    // Parses returned response and extracts
    // the title, links, and text of each news story.
    function top_stories(o){
      var items = o.all.questions;
      var output = '<h1>Questions Asked About Auto loan</h1>';
      var no_items=items.length;
      for(var i=0;i<no_items;i++){
        var title = items[i].Content;
        var link = items[i].Link;
        //var desc = items[i].description;
        output += "<h3><a href='" + link + "' target='_blank'>"+title+"</a></h3><div class='hr'></div>";
      }
      // Place news stories in div tag
      document.getElementById('questions').innerHTML = output;  
    }
    </script>


</head>

<body>
    <div id="page">
		
        <div id="header">
        	<h1><a href="../index.php"><img src="../images/logo-daily-calculators.png" alt="Daily Calculators" width="300" height="50" border="0" longdesc="http://www.dailycalculators.com" /></a></h1>
            <!--<h2>sub title</h2>-->
      	</div>
        <div class="contentText">
        
        
        <div style="width:728px; margin:0 auto;">
        <script type="text/javascript"><!--
		google_ad_client = "ca-pub-3515318982325310";
		/* links728x15 */
		google_ad_slot = "5837736596";
		google_ad_width = 728;
		google_ad_height = 15;
		//-->
		</script>
		<script type="text/javascript"
		src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
		</script>
        </div>

        <div style="margin-left:40px;margin-top:10px;"><a href="auto-loan.php">Back to auto loan calculator</a></div>
        		
        	  <div id="questions"></div>
  				<script src='http://answers.yahooapis.com/AnswersService/V1/questionSearch?appid=uWBEQALIkY03D9ULJRrPqt2HF7S6Fv3Jf7v6&query=car+loan&output=json&callback=top_stories'>
  				</script> 

          
        </div>
       
</div>

<?php include("../common-pages/footer.php"); ?>


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27858574-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body></html>