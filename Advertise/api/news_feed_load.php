<?php
// include core configuration
include_once '../config/core.php';
 
// include database connection
include_once '../config/database.php';
 
    $array = array();
    //$file = file_get_contents("http://webhose.io/search?token=0cd7c349-4350-4428-a096-1185a642f347&format=json&q=(site%3Acnn.com%20OR%20site%3Areuters.com)");
    //$file = file_get_contents("https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=6767115e9cf648b3af243238c139e3f9");
    $file = file_get_contents("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=6767115e9cf648b3af243238c139e3f9");
    $array = json_decode($file, true);
    $arrShort = $array['articles'];
    
    $database = new Database();
    $db = $database->getConnection();
    $i=150;
    print_r(sizeof($arrShort));
    foreach($arrShort as $arr){
        //$feed_id=(string)date("YmdHisv");
        $feed_id=$i++;
        $category="Science";
        $feed_title=(string)$arr['title'];//substr($arr['thread']['title'],0,5);
        $feed_content=(string)$arr['description'];//substr($arr['thread']['title'],0,5);
        $feed_foot=(string)$arr['url'];
        $feed_img=(string)$arr['urlToImage'];
        $likes=0;
        //print_r($feed_foot);
       // $query = "INSERT INTO category_feed
         //           SET feed_id=3000, category='Economy', feed_title='feed_title', feed_content='feed_content', feed_foot='feet_foot', likes=0";
        
        $query = "INSERT INTO category_feed
                    SET feed_id='$feed_id', category='$category', feed_title='$feed_title', feed_content='$feed_content', feed_foot='$feed_foot',feed_img='$feed_img', likes=$likes";
                // prepare query for execution
        $stmt = $db->prepare($query);
        
        if($stmt->execute()){
            echo true;
        }else{
            echo false;
        }
         
    }
    
    
?>