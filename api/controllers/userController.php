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
    $userId = $args["id"];
    
    //security check
    if(!$userId === $this["UserService"]->getUser()->id){
        $response->getBody()->write(json_encode(["error" => "invalid userId"]));
        $response = $response->withStatus(401);
    }else{
        $user = $this["UserService"]->updateUser($userId, $userData);
        return $response->withJson($user);
    }
});