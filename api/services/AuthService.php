<?php

class AuthService{
    
    private $app = null;
    
    public function __construct($app) {
        $this->app = $app;
        $this->db = $app->getContainer()["db"];
    }
    
    public function validateLogin($username, $password) {
        $sql = "SELECT * 
                FROM USERS
                WHERE username = :username
                AND password = :password";

        $params = [ ":username" => $username,
                    ":password" => $password];

        $data = $this->db->query($sql, $params);
        if(!count($data)){
            return null;
        }else{
            return $data;
        }
    }
    
}