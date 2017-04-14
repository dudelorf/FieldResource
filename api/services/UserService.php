<?php

class UserService {

    private $user;
    private $db = null;
    private $services = null;
    private $field_resource_db = "";

    public function __construct($app) {
        $this->db = $app->getContainer()["db"];
        $this->services = $app->getContainer();
        $this->field_resource_db = "FIELD_RESOURCE";
    }

    public function getUser() {
        return $this->user;
    }

    public function updateToken($username, $token){
        $sql = "UPDATE $this->field_resource_db.USERS
                SET token = :token, 
                    token_expire = :expiration
                WHERE username = :username";
        $params = [
            ":token" => $token,
            ":expiration" => date("Y-m-d H:i:s", strtotime("+1 hour")),
            ":username" => $username
        ];
        $count = $this->db->update($sql, $params);
        if($count > 0){
            return true;
        }else{
            return false;
        }
    }

    public function validateToken($token) {
        $sql = "SELECT username,
                       name,
                       id
                FROM $this->field_resource_db.USERS
                WHERE token = :token
                AND token_expire >= NOW()";
        $params = [":token" => $token];

        $user = $this->db->query($sql, $params);
        if(count($user)){
            $user = $user[0];
            $this->updateToken($user["username"], $token);
            $this->user = $user;
            return true;
        }else{
            return false;
        }
    }
    
    public function updateUser($id, $userDetails){
        if(empty($userDetails["password"])){
            return $this->updateUserDetails($id, $userDetails);
        }else{
            return $this->updateUserDetailsWithPassword($id, $userDetails);
        }
    }
    
    private function updateUserDetails($id, $userDetails){
        $sql = "UPDATE 
                    $this->field_resource_db.USERS
                SET 
                    username = :username,
                    name = :name
                WHERE
                    id = :id";
        $params = [
            ":username" => $userDetails["username"],
            ":name" => $userDetails["name"],
            ":id" => $id
        ];
        
        return $this->db->update($sql, $params) > 0;
    }
    
    /**
     * Saves user details with new password 
     * 
     * Generates a salt and hash for password before saving
     * 
     * @param type $id
     * @param type $userDetails
     * @return boolean
     */
    private function updateUserDetailsWithPassword($id, $userDetails){
        //Generate a new password salt and hash
        $passwordDetails = $this->services["AuthService"]->
                           getPasswordDetails($userDetails["password"]);
        $password = $passwordDetails["passwordHash"];
        $salt = $passwordDetails["salt"];
        
        $sql = "UPDATE 
                    $this->field_resource_db.USERS
                SET 
                    username = :username,
                    name = :name,
                    password = :password
                WHERE
                    id = :id";
        $params = [
            ":username" => $userDetails["username"],
            ":name" => $userDetails["name"],
            ":password" => $password,
            ":id" => $id
        ];
        
        return $this->db->update($sql, $params) > 0;
    }
}