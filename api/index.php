<?php

require 'vendor/autoload.php';
require 'services/DatabaseService.php';
require 'services/ConfigService.php';

//Inital application setup
$app = new \Slim\App(new \Slim\Container());
$container = $app->getContainer();

$config = new ConfigService();
$container["config"] = $config;
$container["db"] = new DatabaseService($config);

//service registration
require 'services/AuthService.php';
$container["AuthService"] = new AuthService($app);

//require all routes
require_once 'controllers/authController.php';

//Lets do this!
$app->run();