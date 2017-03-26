<?php

class AuthService{
    
    private $db = null;
    private $UserService = null;
    private $field_resources_db = "";

    public function __construct($app) {
        $this->db = $app->getContainer()["db"];
        $this->UserService = $app->getContainer()["UserService"];
        $this->field_resource_db = "FIELD_RESOURCE";
    }
    
    public function login($username, $password) {
        if($this->validateLogin($username, $password)){
            //generate a new token
            $retArr = ["token" => bin2hex(openssl_random_pseudo_bytes(8))];
            if($this->UserService->updateToken($username, $retArr["token"])){
                return $retArr;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    public function validateLogin($username, $password){
        //TODO modify to check salted and encrypted passwords after
        //registration has been done.
        $sql = "SELECT * 
                FROM " . $this->field_resource_db . ".USERS
                WHERE username = :username
                AND password = :password";

        $params = [ ":username" => $username,
                    ":password" => $password];

        $data = $this->db->query($sql, $params);

        if(!count($data)){
            return false;
        }else{
            //successful login!
            return true;
        }
    }
}