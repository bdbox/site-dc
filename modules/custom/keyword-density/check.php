<?php
include 'class.keywordDensity.php';      

if (isset($_POST['domain'])){
	$domain = $_POST['domain'];
	$obj = new KD();                                     
	$obj->domain = "http://www." . $domain;         
	echo json_encode($obj->result()); 
} else {
	echo "";	
}

?>