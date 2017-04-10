<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//Login validation route
//  ** whitelisted route **
$app->post("/login", function(Request $request, Response $response) {
    $userData = $request->getParsedBody();
    $token = $this->AuthService->login($userData["username"], $userData["password"]);
    if($token){
        $response = $response->withJson($token, 200);
    }else{
        $response->getBody()->write(json_encode(["error" => "invalid login"]));
        $response = $response->withStatus(401);
    }
    
    return $response;
});
