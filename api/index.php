<?php

require 'vendor/autoload.php';

$app = new \Slim\App;

require_once 'controllers/firstController.php';

$app->run();