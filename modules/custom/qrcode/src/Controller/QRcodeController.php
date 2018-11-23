<?php

/**
 * @file
 * Contains \Drupal\whois_lookup\Controller\WhoisLookupAPIController.
 */

namespace Drupal\qrcode\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

include "../../qrcode/qrlib.php";

/**
 * Controller routines for test_api routes.
 */
class QRcodeController extends ControllerBase {

  /**
   * Callback for `my-api/get.json` API method.
   */
  public function get_example( Request $request ) {

    $response['data'] = 'Some test data to return';
    $response['method'] = 'GET';

   // return new JsonResponse( $response );
	   // return new JsonResponse($request->get('name'));

     $qr_data = $request->get('name');
     if(!$qr_data) $qr_data = 'z_qrcode';
     $errorCorrectionLevel = $_POST['e'];
     if(!$errorCorrectionLevel) $errorCorrectionLevel = 'L';
     $matrixPointSize = $_POST['s'];
     if(!$matrixPointSize) $matrixPointSize = 4;
     $qr_color = $_POST['c'];
     if(!$qr_color) $qr_color = '0,0,0';

     $filename = 'qr_code'.DIRECTORY_SEPARATOR;
     $filename .= 'qr_'.md5(time().$errorCorrectionLevel.$matrixPointSize.$qr_data.mt_rand(1000,9999)).'.png';

     QRcode::png($qr_data, $filename, $errorCorrectionLevel, $matrixPointSize, 2);

     if($qr_color != '0,0,0'){
     	$this->c_color($filename,$qr_color);
     }

     echo '<img src="/modules/custom/qrcode/',$filename,'">';
  }

  /**
   * Callback for `my-api/put.json` API method.
   */
  public function put_example( Request $request ) {

    $response['data'] = 'Some test data to return';
    $response['method'] = 'PUT';

    return new JsonResponse( $response );
  }

  /**
   * Callback for `my-api/post.json` API method.
   */
  public function post_example( Request $request ) {

    // This condition checks the `Content-type` and makes sure to
    // decode JSON string from the request body into array.
    if ( 0 === strpos( $request->headers->get( 'Content-Type' ), 'application/json' ) ) {
      $data = json_decode( $request->getContent(), TRUE );
      $request->request->replace( is_array( $data ) ? $data : [] );
    }

    $response['data'] = 'Some test data to return';
    $response['method'] = 'POST';

    return new JsonResponse( $response );
  }

  /**
   * Callback for `my-api/delete.json` API method.
   */
  public function delete_example( Request $request ) {

    $response['data'] = 'Some test data to return';
    $response['method'] = 'DELETE';

    return new JsonResponse( $response );
  }





  //////////////////////////////////////

  function c_color($f_name,$t_rgb){
  	$img_file = $f_name;
  	list($src_w,$src_h,$src_type) = getimagesize($img_file);

  	$im = ImageCreateFromPng($img_file);

  	$t_rgb = explode(',',$t_rgb);

  	$t_color = imagecolorallocate($im,$t_rgb[0],$t_rgb[1],$t_rgb[2]);

  	for($x = 0; $x < $src_w; $x++){
  		for($y = 0; $y < $src_h; $y++){
  			$rgb = ImageColorAt($im, $x, $y);
  			if($rgb == 1){
  				imagesetpixel ($im,$x,$y,$t_color);
  			}
  		}
  	}
  	imagepng($im,$f_name);
  	imagedestroy($im);
  }



}
