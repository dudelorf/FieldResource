<?php

/**
 * Provideds token validation
 *
 * Used as middleware
 */
class TokenAuth {

    //List of urls to exclude from token validation
    private $whitelist = [];
    private $UserService = null;

    public function __construct($app){
        //Set up whitelisted urls
        $this->whitelist = [
            "login"
        ];
        $this->UserService = $app->getContainer()["UserService"];
    }

    private function denyAccess($response){
        return $response->withJson(["error"=>"access denied"], 401);
    }

    //Checks $url against whitelist
    //returns true if public url, false otherwise
    private function isPublicUrl($url){
        $public = array_search($url, $this->whitelist) !== false;
        return $public;
    }

    public function __invoke($request, $response, $next){
        //Get the supplied token
        $headers = $request->getHeaders();
        $token = $headers["HTTP_AUTHORIZATION"][0];
        //check if route requires authorization
        $url = $request->getUri()->getPath();
        if($this->isPublicUrl($url)){
            $finalResponse = $next($request, $response);
        }else{
            if($this->UserService->validateToken($token)){
                $finalResponse = $next($request, $response);
            }else{
                $finalResponse = $this->denyAccess($response);
            }
        }

        return $finalResponse;
    }
}