<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//Gets the current user details
//User data is tied to token supplied in request
$app->get("/user/current", function(Request $request, Response $response){
    $user = $this["UserService"]->getUser();
    return $response->withJson($user);
});

$app->put("/user/{id}", function(Request $request, Response $response, $args){
    $userData = $request->getParsedBody();
    $user = $this["UserService"]->updateUser($args["id"], $userData);
    return $response->withJson($user);
});