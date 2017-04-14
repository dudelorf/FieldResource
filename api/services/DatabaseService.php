<?php

class DatabaseService {
    
    private $connecton = null;
        
    public function __construct($config){
        $this->connection = new PDO($config->dsn, $config->username, $config->password, array(PDO::MYSQL_ATTR_FOUND_ROWS => true));
    }

    /**
     * Queries db and returns associative array of values
     */
    public function query($sql, $params = []) {
        $statement = $this->connection->prepare($sql);
        if($statement->execute($params)){
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return $statement->errorInfo();
        }
    }

    /**
     * Conducts an update operation and returns number of affected rows
     */
    public function update($sql, $params = []) {
        $statement = $this->connection->prepare($sql);
        if($statement->execute($params)){
            return $statement->rowCount();
        }else{
            $err = $statement->errorInfo();
            return 0;
        }
    }
}