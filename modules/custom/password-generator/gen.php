<?php
$length = $_POST["pwLength"];


echo generate_password($length);

function generate_password( $length = 8 ) {
	$chars = "abcdefghijklmnopqrstuvwxyz";
	if (isset($_POST['pwNumbers'])) {
		$chars = $chars . "0123456789";
	}
	if (isset($_POST['pwUppercase'])) {
		$chars = $chars . "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (isset($_POST['pwSymbols'])) {
		$chars = $chars . "!@#$%^&*()_-=+;:,.?";
	}
	
	//$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+;:,.?";
	$password = substr( str_shuffle( $chars ), 0, $length );
	return $password;
}
?>