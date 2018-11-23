<?php

/**
 * @file
 * Contains \Drupal\test_api\Controller\TestAPIController.
 */

namespace Drupal\page_rank_checker\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

include "check.php";
/**
 * Controller routines for test_api routes.
 */
class PageRankController extends ControllerBase {

  /**
   * Callback for `my-api/get.json` API method.
   */
  public function get_example( Request $request ) {
    $txtDomain = $request->get('txtDomain');

    if (isset ($txtDomain)) {
    	$domain = $txtDomain;
    	$json = array ();
    	$pr = new PR ();
    	$json ["pagerank"] = $pr->get_google_pagerank ( $domain );
    	$json ["indexed"] = $this->GoogleIP ( $domain );

    	// echo "$url has Google PageRank: ". $pr->get_google_pagerank($domain) ;
    	// echo "Indexed pages: " . GoogleIP($domain) . "<br />";

    	$xml = simplexml_load_file ( 'http://data.alexa.com/data?cli=10&dat=snbamz&url=' . $domain );
    	$rank = isset ( $xml->SD [1]->POPULARITY ) ? $xml->SD [1]->POPULARITY->attributes ()->TEXT : 0;
    	$web=(string)$xml->SD[0]->attributes()->HOST;
    	// echo $web." has Alexa Rank ".$rank;

    	$json ["alexa"] = $rank;

    	echo json_encode ( $json );
    } else {
    	echo "";
    }

	  // return new JsonResponse($this->generate_password(intval($leng), $numbers, $uppcase, $symbols));
  }

  // indexed page
  function GoogleIP($domain) {
  	$url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=site:" . $domain . "&filter=0";
  	$ch = curl_init ();
  	curl_setopt ( $ch, CURLOPT_URL, $url );
  	curl_setopt ( $ch, CURLOPT_USERAGENT, $_SERVER ['HTTP_USER_AGENT'] );
  	curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
  	curl_setopt ( $ch, CURLOPT_FOLLOWLOCATION, 1 );
  	curl_setopt ( $ch, CURLOPT_HEADER, 0 );
  	curl_setopt ( $ch, CURLOPT_NOBODY, 0 );
  	curl_setopt ( $ch, CURLOPT_TIMEOUT, 30 );
  	$json = curl_exec ( $ch );
  	curl_close ( $ch );
  	$data = json_decode ( $json, true );
  	if ($data ['responseStatus'] == 200)
  		return $data ['responseData'] ['cursor'] ['resultCount'];
  	else
  		return false;
  }



}
