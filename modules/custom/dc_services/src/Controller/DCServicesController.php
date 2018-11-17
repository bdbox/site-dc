<?php

namespace Drupal\dc_services\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Url;

class DCServicesController extends ControllerBase {

  //default
  public function content() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Hello, this is DC services module!'),
    ];
  }

  public function mortgageCalculate() {
    $url = Url::fromUri('http://www.example.com/');
    return [
      '#type' => 'link',
      '#url' => $url,
      '#title' => t('This link was rendered')
    ];
  }

}
