<?php
class Product{
 
    // database connection and table name
    private $conn;
    private $table_name = "user";
 
    // object properties
    public $userid;
    public $username;
    public $password;
 
    public function __construct($db){
        $this->conn = $db;
    }
 
    public function readOne(){
 
        // select one record
        $query = "SELECT id,username,name FROM " . $this->table_name . " WHERE username=:username and password=:password";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        $username=htmlspecialchars(strip_tags($this->username));
        $password=htmlspecialchars(strip_tags($this->password));
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        
        $stmt->execute();

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }
    public function readUserProfile(){
        $query = "SELECT a.id,username,name,category FROM user a,`user_category` b WHERE a.id=b.id and a.id=:userid";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        $userid=htmlspecialchars(strip_tags($this->userid));
         $stmt->bindParam(':userid', $userid);
        
        $stmt->execute();

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }
    
     public function readUserFeeds(){
 
        // select one record
        $query = "select a.id,b.category,feed_id,feed_title,feed_content,feed_foot,feed_img,likes from category_feed as b,user_category as a where a.id=:id and a.category=b.category";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        $id=htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $id);
        
        $stmt->execute();

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }
    public function updateLikes(){
 
       $query = "UPDATE `category_feed` SET likes=:likes WHERE feed_id=:feed_id";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        $feed_id=htmlspecialchars(strip_tags($this->feed_id));
        $likes=htmlspecialchars(strip_tags($this->likes));
        $likes=$likes+1;
        $stmt->bindParam(':feed_id', $feed_id);
        $stmt->bindParam(':likes', $likes);
        
        if($stmt->execute()){
            return true;
        }
        else {
            return false;
        }
    }
    
    
}