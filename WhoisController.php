<?php

use Drupal\Core\Session\AccountInterface;
use Symfony\Component\HttpFoundation\Request;

class WhoisController{  
  
  public function content(AccountInterface $domain, Request $request) {
    // Do something with $domain.
	  return [
      '#type' => 'markup',
      '#markup' => t('Hello, World!'),
    ];
  }
}