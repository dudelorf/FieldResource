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
require 'services/UserService.php';
$container["UserService"] = new UserService($app);
require 'services/AuthService.php';
$container["AuthService"] = new AuthService($app);

//require all routes
require 'controllers/authController.php';

//register middleare
require 'middleware/TokenAuth.php';
$app->add(new TokenAuth($app));

//Lets do this!
$app->run();