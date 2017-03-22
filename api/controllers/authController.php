<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//define routes for auth
$app->post("/login", function(Request $request, Response $response) {
    $userData = $request->getParsedBody();
    $token = $this->AuthService->validateLogin($userData["userName"], $userData["password"]);
    if($token){
        $response->getBody()->write(json_encode($token));
    }else{
        $response->getBody()->write(json_encode(["error" => "invalid login"]));
        $response = $response->withStatus(401);
    }
    
    return $response;
});