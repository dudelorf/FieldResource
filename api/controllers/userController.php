<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//Gets the current user details
//User data is tied to token supplied in request
$app->get("/user/current", function(Request $request, Response $response){
    $user = $this["UserService"]->getUser();
    return $response->withJson($user);
});

//Updates the user specifed
$app->put("/user/{id}", function(Request $request, Response $response, $args){
    $userData = $request->getParsedBody();
    $userId = $args["id"];
    
    //security check
    if(!$userId === $this["UserService"]->getUser()->id){
        $response->getBody()->write(json_encode(["error" => "invalid userId"]));
        return $response->withStatus(403);
    }
    
    return $this["UserService"]->updateUser($userId, $userData) ?
        $response->withJson(["success" => "user updated"]) :
        $response->getBody()
                 ->write(json_encode(["error" => "unable to update user"]))
                 ->withStatus(503);
    
});