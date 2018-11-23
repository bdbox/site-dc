<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Loan Calculator | Daily Calculators</title>
<meta name="description" content="A free online tool to calculate monthly loan payment with interactive charts, amortization tables.">
<meta name="keywords" content="loan calculator, calculate loan payment, finance calculator, loan amortization tables" />
<link rel="stylesheet" type="text/css" href="../styles/style-new.css">
<link rel="stylesheet" type="text/css" href="../styles/custom.css">
<script src="../js/jquery-1.7.2.min.js" type="text/javascript"></script>
<script src="../js/highcharts.js" type="text/javascript"></script>
<script src="../js/sfw.js" type="text/javascript"></script>
<script src="js/custom.js" type="text/javascript"></script>
</head>

<body>
    <div id="page">
	
    <!-- facebook js sdk -->
    <div id="fb-root"></div>
	<script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <!-- facebook js sdk -->
		
        <?php include("../common-pages/header.php"); ?>
        <div class="contentText">
        
        <!-- advertising -->
        <div class="advertising-section" style="text-align:center; margin-top:-10px;">
                <script type="text/javascript"><!--
                google_ad_client = "ca-pub-3515318982325310";
                /* Top Banner 728x90 */
                google_ad_slot = "7288339326";
                google_ad_width = 728;
                google_ad_height = 90;
                //-->
                </script>
                <script type="text/javascript"
                src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
                </script>
        </div>
        <!-- advertising -->
        
        <div id="result_panel">
        	<div class="results-section">
<h2>Summary of loan</h2>

<div class="summaryDiv">

<table class="summaryTableOuter"><tbody><tr><td><table class="summaryTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th></th><th>Amount<br>($)</th></tr><tr class="odd"><td class="lt" width="160">Loan amount</td><td> $60,000.00</td></tr><tr class="even"><td class="lt">Term</td><td>60 months</td></tr><tr class="odd"><td class="lt">Rate</td><td>3.5%</td></tr><tr class="even"><td class="lt"><strong>Monthly payment</strong>:</td><td>$1,091.50</td></tr><tr class="odd"><td class="lt">Total Payment</td><td>$65,490.28</td></tr><tr class="even"><td class="lt">Total Principal</td><td>$60,000.00</td></tr><tr class="odd"><td class="lt">Total Interest</td><td>$5,490.28</td></tr></tbody></table></td></tr></tbody></table>
</div><div style="clear:both;">&nbsp;</div>
<div class="chartDiv" style="margin-top:27px;">
<div id="container"></div>
<div id="pie-container"></div>
<div class="clear"></div>
</div>

<h2>Amortization tables</h2>
<div style="text-align:right;">Year 1</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0" cellpadding="4"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$175.00</td><td>$916.50</td><td>$59,083.50</td></tr><tr class="even"><td>2</td><td>$172.33</td><td>$919.18</td><td>$58,164.32</td></tr><tr class="odd"><td>3</td><td>$169.65</td><td>$921.86</td><td>$57,242.46</td></tr><tr class="even"><td>4</td><td>$166.96</td><td>$924.55</td><td>$56,317.91</td></tr><tr class="odd"><td>5</td><td>$164.26</td><td>$927.24</td><td>$55,390.67</td></tr><tr class="even"><td>6</td><td>$161.56</td><td>$929.95</td><td>$54,460.72</td></tr><tr class="odd"><td>7</td><td>$158.84</td><td>$932.66</td><td>$53,528.06</td></tr><tr class="even"><td>8</td><td>$156.12</td><td>$935.38</td><td>$52,592.68</td></tr><tr class="odd"><td>9</td><td>$153.40</td><td>$938.11</td><td>$51,654.57</td></tr><tr class="even"><td>10</td><td>$150.66</td><td>$940.85</td><td>$50,713.72</td></tr><tr class="odd"><td>11</td><td>$147.92</td><td>$943.59</td><td>$49,770.13</td></tr><tr class="even"><td>12</td><td>$145.16</td><td>$946.34</td><td>$48,823.79</td></tr><tr><td colspan="4" class="summary">Summary of Year 1<br>Total spending: 13,098.06<br>Total interest: 1,921.85<br>Total principal: 11,176.21</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 2</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0" cellpadding="4"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$142.40</td><td>$949.10</td><td>$47,874.69</td></tr><tr class="even"><td>2</td><td>$139.63</td><td>$951.87</td><td>$46,922.82</td></tr><tr class="odd"><td>3</td><td>$136.86</td><td>$954.65</td><td>$45,968.17</td></tr><tr class="even"><td>4</td><td>$134.07</td><td>$957.43</td><td>$45,010.74</td></tr><tr class="odd"><td>5</td><td>$131.28</td><td>$960.22</td><td>$44,050.52</td></tr><tr class="even"><td>6</td><td>$128.48</td><td>$963.02</td><td>$43,087.49</td></tr><tr class="odd"><td>7</td><td>$125.67</td><td>$965.83</td><td>$42,121.66</td></tr><tr class="even"><td>8</td><td>$122.85</td><td>$968.65</td><td>$41,153.01</td></tr><tr class="odd"><td>9</td><td>$120.03</td><td>$971.48</td><td>$40,181.54</td></tr><tr class="even"><td>10</td><td>$117.20</td><td>$974.31</td><td>$39,207.23</td></tr><tr class="odd"><td>11</td><td>$114.35</td><td>$977.15</td><td>$38,230.08</td></tr><tr class="even"><td>12</td><td>$111.50</td><td>$980.00</td><td>$37,250.08</td></tr><tr><td colspan="4" class="summary">Summary of Year 2<br>Total spending: 13,098.06<br>Total interest: 1,524.34<br>Total principal: 11,573.71</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 3</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0" cellpadding="4"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$108.65</td><td>$982.86</td><td>$36,267.22</td></tr><tr class="even"><td>2</td><td>$105.78</td><td>$985.73</td><td>$35,281.49</td></tr><tr class="odd"><td>3</td><td>$102.90</td><td>$988.60</td><td>$34,292.89</td></tr><tr class="even"><td>4</td><td>$100.02</td><td>$991.48</td><td>$33,301.41</td></tr><tr class="odd"><td>5</td><td>$97.13</td><td>$994.38</td><td>$32,307.03</td></tr><tr class="even"><td>6</td><td>$94.23</td><td>$997.28</td><td>$31,309.76</td></tr><tr class="odd"><td>7</td><td>$91.32</td><td>$1,000.18</td><td>$30,309.57</td></tr><tr class="even"><td>8</td><td>$88.40</td><td>$1,003.10</td><td>$29,306.47</td></tr><tr class="odd"><td>9</td><td>$85.48</td><td>$1,006.03</td><td>$28,300.44</td></tr><tr class="even"><td>10</td><td>$82.54</td><td>$1,008.96</td><td>$27,291.48</td></tr><tr class="odd"><td>11</td><td>$79.60</td><td>$1,011.90</td><td>$26,279.58</td></tr><tr class="even"><td>12</td><td>$76.65</td><td>$1,014.86</td><td>$25,264.72</td></tr><tr><td colspan="4" class="summary">Summary of Year 3<br>Total spending: 13,098.06<br>Total interest: 1,112.70<br>Total principal: 11,985.36</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 4</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0" cellpadding="4"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$73.69</td><td>$1,017.82</td><td>$24,246.90</td></tr><tr class="even"><td>2</td><td>$70.72</td><td>$1,020.78</td><td>$23,226.12</td></tr><tr class="odd"><td>3</td><td>$67.74</td><td>$1,023.76</td><td>$22,202.36</td></tr><tr class="even"><td>4</td><td>$64.76</td><td>$1,026.75</td><td>$21,175.61</td></tr><tr class="odd"><td>5</td><td>$61.76</td><td>$1,029.74</td><td>$20,145.87</td></tr><tr class="even"><td>6</td><td>$58.76</td><td>$1,032.75</td><td>$19,113.12</td></tr><tr class="odd"><td>7</td><td>$55.75</td><td>$1,035.76</td><td>$18,077.36</td></tr><tr class="even"><td>8</td><td>$52.73</td><td>$1,038.78</td><td>$17,038.58</td></tr><tr class="odd"><td>9</td><td>$49.70</td><td>$1,041.81</td><td>$15,996.78</td></tr><tr class="even"><td>10</td><td>$46.66</td><td>$1,044.85</td><td>$14,951.93</td></tr><tr class="odd"><td>11</td><td>$43.61</td><td>$1,047.89</td><td>$13,904.03</td></tr><tr class="even"><td>12</td><td>$40.55</td><td>$1,050.95</td><td>$12,853.08</td></tr><tr><td colspan="4" class="summary">Summary of Year 4<br>Total spending: 13,098.06<br>Total interest: 686.42<br>Total principal: 12,411.64</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 5</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0" cellpadding="4"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$37.49</td><td>$1,054.02</td><td>$11,799.07</td></tr><tr class="even"><td>2</td><td>$34.41</td><td>$1,057.09</td><td>$10,741.98</td></tr><tr class="odd"><td>3</td><td>$31.33</td><td>$1,060.17</td><td>$9,681.80</td></tr><tr class="even"><td>4</td><td>$28.24</td><td>$1,063.27</td><td>$8,618.53</td></tr><tr class="odd"><td>5</td><td>$25.14</td><td>$1,066.37</td><td>$7,552.17</td></tr><tr class="even"><td>6</td><td>$22.03</td><td>$1,069.48</td><td>$6,482.69</td></tr><tr class="odd"><td>7</td><td>$18.91</td><td>$1,072.60</td><td>$5,410.09</td></tr><tr class="even"><td>8</td><td>$15.78</td><td>$1,075.73</td><td>$4,334.37</td></tr><tr class="odd"><td>9</td><td>$12.64</td><td>$1,078.86</td><td>$3,255.51</td></tr><tr class="even"><td>10</td><td>$9.50</td><td>$1,082.01</td><td>$2,173.50</td></tr><tr class="odd"><td>11</td><td>$6.34</td><td>$1,085.17</td><td>$1,088.33</td></tr><tr class="even"><td>12</td><td>$3.17</td><td>$1,088.33</td><td>$0.00</td></tr><tr><td colspan="4" class="summary">Summary of Year 5<br>Total spending: 13,098.06<br>Total interest: 244.97<br>Total principal: 12,853.08</td></tr></tbody></table></td></tr></tbody></table>



</div>
        </div>

        <!-- advertising -->
        <div class="advertising-section" style="width:300px; position:absolute; top:127px; right:0px;">
			<script type="text/javascript"><!--
            google_ad_client = "ca-pub-3515318982325310";
            /* 300x250, created 2/3/10 */
            google_ad_slot = "9628688541";
            google_ad_width = 300;
            google_ad_height = 250;
            //-->
            </script>
            <script type="text/javascript"
            src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
            </script>
        </div>
        <!-- advertising -->

        <div id="input_panel">
        <div class="contentTitle"><h1>Loan Calculator <img src="../images/icon_help.png" alt="Loan Calculator Help" id="help-icon" width="18" height="18" border="0" /> 
        <a href="http://dailycalculators.uservoice.com" ><img src="../images/leave-comments.png" alt="Leave your comments" id="leave-comments" border="0" /></a></h1>
        </div>
        	<form action="" method="post" name="simpleMortgageCalForm">
            <div class="entry-section">
            	<label class="light-blue"><strong>Loan Amount</strong> <span class="light-gray">($)</span>: </label>
                <div class="textbox-section">
                	<input name="price" id="price" class="textBox" type="text" value="60000" />
                </div>
                <div id="slider1" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<label class="light-blue"><strong>Loan Term</strong> <span class="light-gray">(Month)</span>: </label>
                <div class="textbox-section">
                	<input name="length" id="length" class="textBox" type="text" value="60" />
                </div>
                <div id="slider3" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<label class="light-blue"><strong>Annual Interest Rate</strong> <span class="light-gray">(%)</span>: </label>
                <div class="textbox-section">
                	<input name="rate" id="rate" class="textBox" type="text" value="3.5" />
                </div>
                <div id="slider4" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<div class="textbox-section textbox-section-one"><input type="checkbox" id="addToCompare" /> Add to compare</div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<div class="textbox-section textbox-section-one"><button id="calculateBtn"></button>
                <button id="calculateBtn2" style="display:none;"></button></div>
            </div>
            <div class="clear"></div>
            
          </form>   
          
            <div class="social-bar">
            	<div style="width:200px; position:absolute; bottom:-62px; right:0px; ">
            	<!-- Place this tag where you want the +1 button to render -->
                <g:plusone size="medium"></g:plusone>
                
                <!-- Place this render call where appropriate -->
                <script type="text/javascript">
                  (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/plusone.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                  })();
                </script>
                
                <!-- facebook button-->
                <div class="fb-like" data-href="http://www.facebook.com/pages/DailyCalculatorscom/197464063678902" data-send="false" data-layout="button_count" data-width="50" data-show-faces="false" style="top:-3px;"></div>           
                <!-- facebook button-->
            </div>
            </div>     
         </div>
         
		<div id="helpBox">
          	<h2>Help</h2>
          	<ul>
            	<li><strong>Loan amount</strong> - the final sale price of real estate, also called purchase price.</li>
            	<li><strong>Loan term</strong> -  the number of monthly payments, also called the loan's term, e.g. 360 months(30 years).</li>
            	<li><strong>Annual interest rate</strong> - interest rate by year, expressed as a percentage.</li>
            </ul>
          </div>
        
        
        <!-- advertising -->
        <br /><div class="advertising-section" style="text-align:center">
                <script type="text/javascript"><!--
                google_ad_client = "ca-pub-3515318982325310";
                /* Top Banner 728x90 */
                google_ad_slot = "7288339326";
                google_ad_width = 728;
                google_ad_height = 90;
                //-->
                </script>
                <script type="text/javascript"
                src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
                </script>
        </div>
        <!-- advertising -->


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