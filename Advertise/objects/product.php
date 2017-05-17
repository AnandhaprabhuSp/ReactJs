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
    public function readCategories(){
        
        // select one record
        $query = "SELECT category_id,category FROM adCategories where category=:category";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);
        
        $location=htmlspecialchars(strip_tags($this->location));
        $category=htmlspecialchars(strip_tags($this->category));
        $stmt->bindParam(':location', $location);
        $stmt->bindParam(':category', $category);
        
        $stmt->execute();

        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
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
    
     public function readAds(){
 
        
        // select one record
        $query = "SELECT * FROM `adadvertise` WHERE category=?";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);
        
        $category=htmlspecialchars(strip_tags($this->category));
        $location=htmlspecialchars(strip_tags($this->location));
        $stmt->bindParam(1, $category);
        //$stmt->bindParam(':location', $location);
        
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
    
    public function saveAd(){
 
       $query = "INSERT INTO `adAdvertise` (`adId`, `userid`, `category`, `title`, `themeImg`, `conImage`, `bhk`, `sqFeet`, `rent`, `advance`, `offers`, `type`, `trailer`, `price`, `mYear`, `ownMed`, `splFeatures`, `landmark`, `mail`, `contact`, `description`) VALUES (NULL,:userid,:category,:title,:themeImg,:conImg,:bhk,:sqFeet,:rent,:advance,:offers, :type,:trailer,:price,:mYear, :ownMed,:splFeatures,:landmark,:mail,:contact,:description)";
        //$query = "INSERT INTO `adAdvertise` (`adId`, `userid`, `category`, `title`, `themeImg`, `conImage`, `bhk`, `sqFeet`, `rent`, `advance`, `offers`, `type`, `trailer`, `price`, `mYear`, `ownMed`, `splFeatures`, `landmark`, `mail`, `contact`, `description`) VALUES (NULL,3, 'general', 'Land for sale', 'img url', 'img url', '2bhk','1500sq.feet',5000,50000,'50 percentage','Owner','youtube', 2000,2015, 'Owner', 'Nearby by schools','Nearby by Apoorva Hotel','saprabhu@gmail.com',8012029707,'Description about the land')";
        
        //prepare query for excecution
        $stmt = $this->conn->prepare($query);
            
        $userid=htmlspecialchars(strip_tags($this->data["userid"]));
        $category=htmlspecialchars(strip_tags($this->data["category"]));
        $title=htmlspecialchars(strip_tags($this->data["title"]));
        $themeImg=htmlspecialchars(strip_tags($this->data["themeImg"]));
        
        $conImg=htmlspecialchars(strip_tags($this->data["conImg"]));
        $bhk=htmlspecialchars(strip_tags($this->data["bhk"]));
        $sqFeet=htmlspecialchars(strip_tags($this->data["sqFeet"]));
        $rent=htmlspecialchars(strip_tags($this->data["rent"]));
        
        $advance=htmlspecialchars(strip_tags($this->data["advance"]));
        $offers=htmlspecialchars(strip_tags($this->data["offers"]));
        $type=htmlspecialchars(strip_tags($this->data["type"]));
        $trailer=htmlspecialchars(strip_tags($this->data["trailer"]));
        
        $price=htmlspecialchars(strip_tags($this->data["price"]));
        $mYear=htmlspecialchars(strip_tags($this->data["mYear"]));
        $ownMed=htmlspecialchars(strip_tags($this->data["ownMed"]));
        $splFeatures=htmlspecialchars(strip_tags($this->data["splFeatures"]));
        
        $landmark=htmlspecialchars(strip_tags($this->data["landmark"]));
        $mail=htmlspecialchars(strip_tags($this->data["mail"]));
        $contact=htmlspecialchars(strip_tags($this->data["contact"]));
        $description=htmlspecialchars(strip_tags($this->data["description"]));
        
        $stmt->bindParam(':userid', $userid);
        $stmt->bindParam(':category', $category);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':themeImg', $themeImg);
        
        $stmt->bindParam(':conImg', $conImg);
        $stmt->bindParam(':bhk', $bhk);
        $stmt->bindParam(':sqFeet', $sqFeet);
        $stmt->bindParam(':rent', $rent);
        
        $stmt->bindParam(':advance', $advance);
        $stmt->bindParam(':offers', $offers);
        $stmt->bindParam(':type', $type);
        $stmt->bindParam(':trailer', $trailer);
        
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':mYear', $mYear);
        $stmt->bindParam(':ownMed', $ownMed);
        $stmt->bindParam(':splFeatures', $splFeatures);
        
        $stmt->bindParam(':landmark', $landmark);
        $stmt->bindParam(':mail', $mail);
        $stmt->bindParam(':contact', $contact);
        $stmt->bindParam(':description', $description);
        
        
        if($stmt->execute()){
            return true;
        }
        else {
            return false;
        }
    }
    
    
}