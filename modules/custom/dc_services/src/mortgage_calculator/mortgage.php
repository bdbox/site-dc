<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Mortgage Calculator | Daily Calculators</title>
<meta name="description" content="A free online mortgage calculator for mortgage brokers, home buyers and investors. It has interactive charts, amortization tables, compares two mortgages at a time.">
<meta name="keywords" content="mortgage calculator, mortgage loan, calculate house payment, housing cost calculation" />
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
  		<div id="bar" style="display:none;">
            <div class="inner">
                <div class="link"><a href="../index.php">Home</a></div>
                <div class="link"><a href="mortgage.php">Mortgage Calculator</a></div>
                <div class="link"><a href="#"></a></div>
            </div>
      	</div>
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
        
        <div id="result_panel" title="mortgage calculation results">
                        <div class="results-section">
<h2>Summary of mortgage</h2>

<div class="summaryDiv">

<table class="summaryTableOuter"><tbody><tr><td><table class="summaryTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th></th><th>Amount</th></tr><tr class="odd"><td class="lt" width="160">Price</td><td> $400,000.00</td></tr><tr class="even"><td class="lt">Down</td><td>20%</td></tr><tr class="odd"><td class="lt">Principal</td><td>$320,000.00</td></tr><tr class="even"><td class="lt">Term</td><td>180 months</td></tr><tr class="odd"><td class="lt">Rate</td><td>3.25%</td></tr><tr class="even"><td class="lt"><strong>Monthly payment</strong>:</td><td>$2,248.54</td></tr><tr class="odd"><td class="lt">Total Payment</td><td>$404,737.21</td></tr><tr class="even"><td class="lt">Total Principal</td><td>$320,000.00</td></tr><tr class="odd"><td class="lt">Total Interest</td><td>$84,737.21</td></tr></tbody></table></td></tr></tbody></table>
</div><div style="clear:both;">&nbsp;</div>
<div class="chartDiv">
<div id="container" title="Chart - Monthly mortgage interest and principal payment"></div>
<div id="pie-container" title="Chart - Mortgage principal vs interest"></div>
<div class="clear"></div>
</div>

<h2>Amortization tables</h2>
<div style="text-align:right;">Year 1</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$866.67</td><td>$1,381.87</td><td>$318,618.13</td></tr><tr class="even"><td>2</td><td>$862.92</td><td>$1,385.62</td><td>$317,232.51</td></tr><tr class="odd"><td>3</td><td>$859.17</td><td>$1,389.37</td><td>$315,843.14</td></tr><tr class="even"><td>4</td><td>$855.41</td><td>$1,393.13</td><td>$314,450.01</td></tr><tr class="odd"><td>5</td><td>$851.64</td><td>$1,396.90</td><td>$313,053.11</td></tr><tr class="even"><td>6</td><td>$847.85</td><td>$1,400.69</td><td>$311,652.42</td></tr><tr class="odd"><td>7</td><td>$844.06</td><td>$1,404.48</td><td>$310,247.94</td></tr><tr class="even"><td>8</td><td>$840.25</td><td>$1,408.29</td><td>$308,839.65</td></tr><tr class="odd"><td>9</td><td>$836.44</td><td>$1,412.10</td><td>$307,427.55</td></tr><tr class="even"><td>10</td><td>$832.62</td><td>$1,415.92</td><td>$306,011.63</td></tr><tr class="odd"><td>11</td><td>$828.78</td><td>$1,419.76</td><td>$304,591.87</td></tr><tr class="even"><td>12</td><td>$824.94</td><td>$1,423.60</td><td>$303,168.27</td></tr><tr><td colspan="4" class="summary">Summary of Year 1<br>Total spending: 26,982.48<br>Total interest: 10,150.75<br>Total principal: 16,831.73</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 2</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$821.08</td><td>$1,427.46</td><td>$301,740.81</td></tr><tr class="even"><td>2</td><td>$817.21</td><td>$1,431.33</td><td>$300,309.48</td></tr><tr class="odd"><td>3</td><td>$813.34</td><td>$1,435.20</td><td>$298,874.28</td></tr><tr class="even"><td>4</td><td>$809.45</td><td>$1,439.09</td><td>$297,435.19</td></tr><tr class="odd"><td>5</td><td>$805.55</td><td>$1,442.99</td><td>$295,992.20</td></tr><tr class="even"><td>6</td><td>$801.65</td><td>$1,446.89</td><td>$294,545.31</td></tr><tr class="odd"><td>7</td><td>$797.73</td><td>$1,450.81</td><td>$293,094.50</td></tr><tr class="even"><td>8</td><td>$793.80</td><td>$1,454.74</td><td>$291,639.75</td></tr><tr class="odd"><td>9</td><td>$789.86</td><td>$1,458.68</td><td>$290,181.07</td></tr><tr class="even"><td>10</td><td>$785.91</td><td>$1,462.63</td><td>$288,718.44</td></tr><tr class="odd"><td>11</td><td>$781.95</td><td>$1,466.59</td><td>$287,251.84</td></tr><tr class="even"><td>12</td><td>$777.97</td><td>$1,470.57</td><td>$285,781.28</td></tr><tr><td colspan="4" class="summary">Summary of Year 2<br>Total spending: 26,982.48<br>Total interest: 9,595.49<br>Total principal: 17,386.99</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 3</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$773.99</td><td>$1,474.55</td><td>$284,306.73</td></tr><tr class="even"><td>2</td><td>$770.00</td><td>$1,478.54</td><td>$282,828.19</td></tr><tr class="odd"><td>3</td><td>$765.99</td><td>$1,482.55</td><td>$281,345.64</td></tr><tr class="even"><td>4</td><td>$761.98</td><td>$1,486.56</td><td>$279,859.08</td></tr><tr class="odd"><td>5</td><td>$757.95</td><td>$1,490.59</td><td>$278,368.49</td></tr><tr class="even"><td>6</td><td>$753.91</td><td>$1,494.63</td><td>$276,873.86</td></tr><tr class="odd"><td>7</td><td>$749.87</td><td>$1,498.67</td><td>$275,375.19</td></tr><tr class="even"><td>8</td><td>$745.81</td><td>$1,502.73</td><td>$273,872.46</td></tr><tr class="odd"><td>9</td><td>$741.74</td><td>$1,506.80</td><td>$272,365.66</td></tr><tr class="even"><td>10</td><td>$737.66</td><td>$1,510.88</td><td>$270,854.77</td></tr><tr class="odd"><td>11</td><td>$733.57</td><td>$1,514.98</td><td>$269,339.80</td></tr><tr class="even"><td>12</td><td>$729.46</td><td>$1,519.08</td><td>$267,820.72</td></tr><tr><td colspan="4" class="summary">Summary of Year 3<br>Total spending: 26,982.48<br>Total interest: 9,021.92<br>Total principal: 17,960.56</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 4</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$725.35</td><td>$1,523.19</td><td>$266,297.53</td></tr><tr class="even"><td>2</td><td>$721.22</td><td>$1,527.32</td><td>$264,770.21</td></tr><tr class="odd"><td>3</td><td>$717.09</td><td>$1,531.45</td><td>$263,238.75</td></tr><tr class="even"><td>4</td><td>$712.94</td><td>$1,535.60</td><td>$261,703.15</td></tr><tr class="odd"><td>5</td><td>$708.78</td><td>$1,539.76</td><td>$260,163.39</td></tr><tr class="even"><td>6</td><td>$704.61</td><td>$1,543.93</td><td>$258,619.46</td></tr><tr class="odd"><td>7</td><td>$700.43</td><td>$1,548.11</td><td>$257,071.35</td></tr><tr class="even"><td>8</td><td>$696.23</td><td>$1,552.31</td><td>$255,519.04</td></tr><tr class="odd"><td>9</td><td>$692.03</td><td>$1,556.51</td><td>$253,962.53</td></tr><tr class="even"><td>10</td><td>$687.82</td><td>$1,560.72</td><td>$252,401.81</td></tr><tr class="odd"><td>11</td><td>$683.59</td><td>$1,564.95</td><td>$250,836.86</td></tr><tr class="even"><td>12</td><td>$679.35</td><td>$1,569.19</td><td>$249,267.67</td></tr><tr><td colspan="4" class="summary">Summary of Year 4<br>Total spending: 26,982.48<br>Total interest: 8,429.43<br>Total principal: 18,553.05</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 5</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$675.10</td><td>$1,573.44</td><td>$247,694.23</td></tr><tr class="even"><td>2</td><td>$670.84</td><td>$1,577.70</td><td>$246,116.53</td></tr><tr class="odd"><td>3</td><td>$666.57</td><td>$1,581.97</td><td>$244,534.55</td></tr><tr class="even"><td>4</td><td>$662.28</td><td>$1,586.26</td><td>$242,948.29</td></tr><tr class="odd"><td>5</td><td>$657.98</td><td>$1,590.56</td><td>$241,357.74</td></tr><tr class="even"><td>6</td><td>$653.68</td><td>$1,594.86</td><td>$239,762.87</td></tr><tr class="odd"><td>7</td><td>$649.36</td><td>$1,599.18</td><td>$238,163.69</td></tr><tr class="even"><td>8</td><td>$645.03</td><td>$1,603.51</td><td>$236,560.18</td></tr><tr class="odd"><td>9</td><td>$640.68</td><td>$1,607.86</td><td>$234,952.32</td></tr><tr class="even"><td>10</td><td>$636.33</td><td>$1,612.21</td><td>$233,340.11</td></tr><tr class="odd"><td>11</td><td>$631.96</td><td>$1,616.58</td><td>$231,723.53</td></tr><tr class="even"><td>12</td><td>$627.58</td><td>$1,620.96</td><td>$230,102.58</td></tr><tr><td colspan="4" class="summary">Summary of Year 5<br>Total spending: 26,982.48<br>Total interest: 7,817.39<br>Total principal: 19,165.09</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 6</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$623.19</td><td>$1,625.35</td><td>$228,477.23</td></tr><tr class="even"><td>2</td><td>$618.79</td><td>$1,629.75</td><td>$226,847.49</td></tr><tr class="odd"><td>3</td><td>$614.38</td><td>$1,634.16</td><td>$225,213.32</td></tr><tr class="even"><td>4</td><td>$609.95</td><td>$1,638.59</td><td>$223,574.74</td></tr><tr class="odd"><td>5</td><td>$605.51</td><td>$1,643.03</td><td>$221,931.71</td></tr><tr class="even"><td>6</td><td>$601.07</td><td>$1,647.48</td><td>$220,284.24</td></tr><tr class="odd"><td>7</td><td>$596.60</td><td>$1,651.94</td><td>$218,632.30</td></tr><tr class="even"><td>8</td><td>$592.13</td><td>$1,656.41</td><td>$216,975.89</td></tr><tr class="odd"><td>9</td><td>$587.64</td><td>$1,660.90</td><td>$215,314.99</td></tr><tr class="even"><td>10</td><td>$583.14</td><td>$1,665.40</td><td>$213,649.60</td></tr><tr class="odd"><td>11</td><td>$578.63</td><td>$1,669.91</td><td>$211,979.69</td></tr><tr class="even"><td>12</td><td>$574.11</td><td>$1,674.43</td><td>$210,305.26</td></tr><tr><td colspan="4" class="summary">Summary of Year 6<br>Total spending: 26,982.48<br>Total interest: 7,185.16<br>Total principal: 19,797.32</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 7</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$569.58</td><td>$1,678.96</td><td>$208,626.30</td></tr><tr class="even"><td>2</td><td>$565.03</td><td>$1,683.51</td><td>$206,942.79</td></tr><tr class="odd"><td>3</td><td>$560.47</td><td>$1,688.07</td><td>$205,254.72</td></tr><tr class="even"><td>4</td><td>$555.90</td><td>$1,692.64</td><td>$203,562.08</td></tr><tr class="odd"><td>5</td><td>$551.31</td><td>$1,697.23</td><td>$201,864.85</td></tr><tr class="even"><td>6</td><td>$546.72</td><td>$1,701.82</td><td>$200,163.03</td></tr><tr class="odd"><td>7</td><td>$542.11</td><td>$1,706.43</td><td>$198,456.60</td></tr><tr class="even"><td>8</td><td>$537.49</td><td>$1,711.05</td><td>$196,745.54</td></tr><tr class="odd"><td>9</td><td>$532.85</td><td>$1,715.69</td><td>$195,029.86</td></tr><tr class="even"><td>10</td><td>$528.21</td><td>$1,720.33</td><td>$193,309.52</td></tr><tr class="odd"><td>11</td><td>$523.55</td><td>$1,724.99</td><td>$191,584.53</td></tr><tr class="even"><td>12</td><td>$518.87</td><td>$1,729.67</td><td>$189,854.86</td></tr><tr><td colspan="4" class="summary">Summary of Year 7<br>Total spending: 26,982.48<br>Total interest: 6,532.08<br>Total principal: 20,450.40</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 8</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$514.19</td><td>$1,734.35</td><td>$188,120.51</td></tr><tr class="even"><td>2</td><td>$509.49</td><td>$1,739.05</td><td>$186,381.47</td></tr><tr class="odd"><td>3</td><td>$504.78</td><td>$1,743.76</td><td>$184,637.71</td></tr><tr class="even"><td>4</td><td>$500.06</td><td>$1,748.48</td><td>$182,889.23</td></tr><tr class="odd"><td>5</td><td>$495.32</td><td>$1,753.22</td><td>$181,136.01</td></tr><tr class="even"><td>6</td><td>$490.58</td><td>$1,757.96</td><td>$179,378.05</td></tr><tr class="odd"><td>7</td><td>$485.82</td><td>$1,762.72</td><td>$177,615.33</td></tr><tr class="even"><td>8</td><td>$481.04</td><td>$1,767.50</td><td>$175,847.83</td></tr><tr class="odd"><td>9</td><td>$476.25</td><td>$1,772.29</td><td>$174,075.54</td></tr><tr class="even"><td>10</td><td>$471.45</td><td>$1,777.09</td><td>$172,298.46</td></tr><tr class="odd"><td>11</td><td>$466.64</td><td>$1,781.90</td><td>$170,516.56</td></tr><tr class="even"><td>12</td><td>$461.82</td><td>$1,786.72</td><td>$168,729.83</td></tr><tr><td colspan="4" class="summary">Summary of Year 8<br>Total spending: 26,982.48<br>Total interest: 5,857.45<br>Total principal: 21,125.03</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 9</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$456.98</td><td>$1,791.56</td><td>$166,938.27</td></tr><tr class="even"><td>2</td><td>$452.12</td><td>$1,796.42</td><td>$165,141.85</td></tr><tr class="odd"><td>3</td><td>$447.26</td><td>$1,801.28</td><td>$163,340.57</td></tr><tr class="even"><td>4</td><td>$442.38</td><td>$1,806.16</td><td>$161,534.41</td></tr><tr class="odd"><td>5</td><td>$437.49</td><td>$1,811.05</td><td>$159,723.36</td></tr><tr class="even"><td>6</td><td>$432.58</td><td>$1,815.96</td><td>$157,907.41</td></tr><tr class="odd"><td>7</td><td>$427.67</td><td>$1,820.87</td><td>$156,086.53</td></tr><tr class="even"><td>8</td><td>$422.73</td><td>$1,825.81</td><td>$154,260.73</td></tr><tr class="odd"><td>9</td><td>$417.79</td><td>$1,830.75</td><td>$152,429.98</td></tr><tr class="even"><td>10</td><td>$412.83</td><td>$1,835.71</td><td>$150,594.27</td></tr><tr class="odd"><td>11</td><td>$407.86</td><td>$1,840.68</td><td>$148,753.59</td></tr><tr class="even"><td>12</td><td>$402.87</td><td>$1,845.67</td><td>$146,907.92</td></tr><tr><td colspan="4" class="summary">Summary of Year 9<br>Total spending: 26,982.48<br>Total interest: 5,160.57<br>Total principal: 21,821.91</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 10</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$397.88</td><td>$1,850.66</td><td>$145,057.26</td></tr><tr class="even"><td>2</td><td>$392.86</td><td>$1,855.68</td><td>$143,201.58</td></tr><tr class="odd"><td>3</td><td>$387.84</td><td>$1,860.70</td><td>$141,340.88</td></tr><tr class="even"><td>4</td><td>$382.80</td><td>$1,865.74</td><td>$139,475.14</td></tr><tr class="odd"><td>5</td><td>$377.75</td><td>$1,870.79</td><td>$137,604.34</td></tr><tr class="even"><td>6</td><td>$372.68</td><td>$1,875.86</td><td>$135,728.48</td></tr><tr class="odd"><td>7</td><td>$367.60</td><td>$1,880.94</td><td>$133,847.54</td></tr><tr class="even"><td>8</td><td>$362.50</td><td>$1,886.04</td><td>$131,961.50</td></tr><tr class="odd"><td>9</td><td>$357.40</td><td>$1,891.14</td><td>$130,070.36</td></tr><tr class="even"><td>10</td><td>$352.27</td><td>$1,896.27</td><td>$128,174.09</td></tr><tr class="odd"><td>11</td><td>$347.14</td><td>$1,901.40</td><td>$126,272.69</td></tr><tr class="even"><td>12</td><td>$341.99</td><td>$1,906.55</td><td>$124,366.14</td></tr><tr><td colspan="4" class="summary">Summary of Year 10<br>Total spending: 26,982.48<br>Total interest: 4,440.70<br>Total principal: 22,541.78</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 11</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$336.82</td><td>$1,911.72</td><td>$122,454.42</td></tr><tr class="even"><td>2</td><td>$331.65</td><td>$1,916.89</td><td>$120,537.53</td></tr><tr class="odd"><td>3</td><td>$326.46</td><td>$1,922.08</td><td>$118,615.45</td></tr><tr class="even"><td>4</td><td>$321.25</td><td>$1,927.29</td><td>$116,688.16</td></tr><tr class="odd"><td>5</td><td>$316.03</td><td>$1,932.51</td><td>$114,755.65</td></tr><tr class="even"><td>6</td><td>$310.80</td><td>$1,937.74</td><td>$112,817.90</td></tr><tr class="odd"><td>7</td><td>$305.55</td><td>$1,942.99</td><td>$110,874.91</td></tr><tr class="even"><td>8</td><td>$300.29</td><td>$1,948.25</td><td>$108,926.66</td></tr><tr class="odd"><td>9</td><td>$295.01</td><td>$1,953.53</td><td>$106,973.13</td></tr><tr class="even"><td>10</td><td>$289.72</td><td>$1,958.82</td><td>$105,014.31</td></tr><tr class="odd"><td>11</td><td>$284.41</td><td>$1,964.13</td><td>$103,050.18</td></tr><tr class="even"><td>12</td><td>$279.09</td><td>$1,969.45</td><td>$101,080.73</td></tr><tr><td colspan="4" class="summary">Summary of Year 11<br>Total spending: 26,982.48<br>Total interest: 3,697.08<br>Total principal: 23,285.40</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 12</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$273.76</td><td>$1,974.78</td><td>$99,105.95</td></tr><tr class="even"><td>2</td><td>$268.41</td><td>$1,980.13</td><td>$97,125.83</td></tr><tr class="odd"><td>3</td><td>$263.05</td><td>$1,985.49</td><td>$95,140.33</td></tr><tr class="even"><td>4</td><td>$257.67</td><td>$1,990.87</td><td>$93,149.47</td></tr><tr class="odd"><td>5</td><td>$252.28</td><td>$1,996.26</td><td>$91,153.21</td></tr><tr class="even"><td>6</td><td>$246.87</td><td>$2,001.67</td><td>$89,151.54</td></tr><tr class="odd"><td>7</td><td>$241.45</td><td>$2,007.09</td><td>$87,144.45</td></tr><tr class="even"><td>8</td><td>$236.02</td><td>$2,012.52</td><td>$85,131.93</td></tr><tr class="odd"><td>9</td><td>$230.57</td><td>$2,017.97</td><td>$83,113.95</td></tr><tr class="even"><td>10</td><td>$225.10</td><td>$2,023.44</td><td>$81,090.51</td></tr><tr class="odd"><td>11</td><td>$219.62</td><td>$2,028.92</td><td>$79,061.59</td></tr><tr class="even"><td>12</td><td>$214.13</td><td>$2,034.41</td><td>$77,027.18</td></tr><tr><td colspan="4" class="summary">Summary of Year 12<br>Total spending: 26,982.48<br>Total interest: 2,928.93<br>Total principal: 24,053.55</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 13</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$208.62</td><td>$2,039.92</td><td>$74,987.25</td></tr><tr class="even"><td>2</td><td>$203.09</td><td>$2,045.45</td><td>$72,941.80</td></tr><tr class="odd"><td>3</td><td>$197.55</td><td>$2,050.99</td><td>$70,890.82</td></tr><tr class="even"><td>4</td><td>$192.00</td><td>$2,056.54</td><td>$68,834.27</td></tr><tr class="odd"><td>5</td><td>$186.43</td><td>$2,062.11</td><td>$66,772.16</td></tr><tr class="even"><td>6</td><td>$180.84</td><td>$2,067.70</td><td>$64,704.46</td></tr><tr class="odd"><td>7</td><td>$175.24</td><td>$2,073.30</td><td>$62,631.16</td></tr><tr class="even"><td>8</td><td>$169.63</td><td>$2,078.91</td><td>$60,552.25</td></tr><tr class="odd"><td>9</td><td>$164.00</td><td>$2,084.54</td><td>$58,467.70</td></tr><tr class="even"><td>10</td><td>$158.35</td><td>$2,090.19</td><td>$56,377.51</td></tr><tr class="odd"><td>11</td><td>$152.69</td><td>$2,095.85</td><td>$54,281.66</td></tr><tr class="even"><td>12</td><td>$147.01</td><td>$2,101.53</td><td>$52,180.13</td></tr><tr><td colspan="4" class="summary">Summary of Year 13<br>Total spending: 26,982.48<br>Total interest: 2,135.43<br>Total principal: 24,847.05</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 14</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$141.32</td><td>$2,107.22</td><td>$50,072.91</td></tr><tr class="even"><td>2</td><td>$135.61</td><td>$2,112.93</td><td>$47,959.99</td></tr><tr class="odd"><td>3</td><td>$129.89</td><td>$2,118.65</td><td>$45,841.34</td></tr><tr class="even"><td>4</td><td>$124.15</td><td>$2,124.39</td><td>$43,716.95</td></tr><tr class="odd"><td>5</td><td>$118.40</td><td>$2,130.14</td><td>$41,586.81</td></tr><tr class="even"><td>6</td><td>$112.63</td><td>$2,135.91</td><td>$39,450.90</td></tr><tr class="odd"><td>7</td><td>$106.85</td><td>$2,141.69</td><td>$37,309.21</td></tr><tr class="even"><td>8</td><td>$101.05</td><td>$2,147.49</td><td>$35,161.72</td></tr><tr class="odd"><td>9</td><td>$95.23</td><td>$2,153.31</td><td>$33,008.41</td></tr><tr class="even"><td>10</td><td>$89.40</td><td>$2,159.14</td><td>$30,849.26</td></tr><tr class="odd"><td>11</td><td>$83.55</td><td>$2,164.99</td><td>$28,684.27</td></tr><tr class="even"><td>12</td><td>$77.69</td><td>$2,170.85</td><td>$26,513.42</td></tr><tr><td colspan="4" class="summary">Summary of Year 14<br>Total spending: 26,982.48<br>Total interest: 1,315.77<br>Total principal: 25,666.71</td></tr></tbody></table></td></tr></tbody></table><div style="text-align:right;">Year 15</div><table class="mortgageTableOuter"><tbody><tr><td><table class="mortgageTable" width="100%" border="0" cellspacing="0"><tbody><tr class="hd"><th>Month</th><th>Interest Paid</th><th>Principal Paid</th><th>Balance</th></tr><tr class="odd"><td>1</td><td>$71.81</td><td>$2,176.73</td><td>$24,336.69</td></tr><tr class="even"><td>2</td><td>$65.91</td><td>$2,182.63</td><td>$22,154.06</td></tr><tr class="odd"><td>3</td><td>$60.00</td><td>$2,188.54</td><td>$19,965.52</td></tr><tr class="even"><td>4</td><td>$54.07</td><td>$2,194.47</td><td>$17,771.05</td></tr><tr class="odd"><td>5</td><td>$48.13</td><td>$2,200.41</td><td>$15,570.64</td></tr><tr class="even"><td>6</td><td>$42.17</td><td>$2,206.37</td><td>$13,364.27</td></tr><tr class="odd"><td>7</td><td>$36.19</td><td>$2,212.35</td><td>$11,151.93</td></tr><tr class="even"><td>8</td><td>$30.20</td><td>$2,218.34</td><td>$8,933.59</td></tr><tr class="odd"><td>9</td><td>$24.20</td><td>$2,224.34</td><td>$6,709.25</td></tr><tr class="even"><td>10</td><td>$18.17</td><td>$2,230.37</td><td>$4,478.88</td></tr><tr class="odd"><td>11</td><td>$12.13</td><td>$2,236.41</td><td>$2,242.47</td></tr><tr class="even"><td>12</td><td>$6.07</td><td>$2,242.47</td><td>$0.00</td></tr><tr><td colspan="4" class="summary">Summary of Year 15<br>Total spending: 26,982.48<br>Total interest: 469.06<br>Total principal: 26,513.42</td></tr></tbody></table></td></tr></tbody></table>



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
        <div class="contentTitle"><h1>Mortgage Calculator <img src="../images/icon_help.png" alt="Loan Calculator Help" id="help-icon" width="18" height="18" border="0" /> 
        <a href="http://dailycalculators.uservoice.com" ><img src="../images/leave-comments.png" alt="Leave your comments" id="leave-comments" border="0" /></a></h1>
        </div>
        	<form action="" method="post" name="simpleMortgageCalForm">
            <div class="entry-section">
            	<label class="light-blue"><strong> Price of Home</strong> <span class="light-gray">($)</span>: </label>
                <div class="textbox-section">
                	<input name="price" id="price" class="textBox" type="text" value="400000" />
                </div>
                <div id="slider1" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<label class="light-blue"><strong>Down</strong> <span class="light-gray">(%)</span>: <span id="down-amount" class="light-gray"></span></label>
                <div class="textbox-section">
                    <input name="down" id="down" class="textBox" type="text" value="20" />
                </div>
                <div id="slider2" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<label class="light-blue"><strong>Term</strong> <span class="light-gray">(Year)</span>: </label>
                <div class="textbox-section">
                	<input name="length" id="length" class="textBox" type="text" value="15" />
                </div>
                <div id="slider3" class="slider_class"></div>
            </div>
            <div class="clear"></div>
            <div class="entry-section">
            	<label class="light-blue"><strong>Interest Rate</strong> <span class="light-gray">(%)</span>: </label>
                <div class="textbox-section">
                	<input name="rate" id="rate" class="textBox" type="text" value="3.25" />
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
            	<li><strong>Price of Home</strong> - the final sale price of real estate, also called purchase price.</li>
            	<li><strong>Down</strong> -  the initial upfront portion of the total amount due and it is usually given in cash at the time of finalizing the transaction. In the United States, down payments for home purchases typically vary between 3.5% and 20% of the purchase price.</li>
            	<li><strong>Term</strong> -  the number of monthly payments, also called the loan's term, e.g. 360 months(30 years).</li>
            	<li><strong>Interest Rate</strong> - interest rate by year, expressed as a percentage.</li>
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

<!--<div style="width:800px; margin:10px auto; text-align:center;">links: <a href="http://www.baikalglobal.com/">baikalglobal.com Link And Article Directory</a></div>-->

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