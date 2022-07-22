<?php
    $requestPayload = file_get_contents("php://input");
    $object = json_decode($requestPayload,true);
    
    $visitor_age = $object['age'];
    $visitor_sex = $object['sex'];
    $visitor_region = $object['region'];
    if(isset($object['country1'])){
        $visitor_country = $object['country1'];
    } elseif (isset($object['country2'])){
        $visitor_country = $object['country2'];
    } elseif (isset($object['country3'])){
        $visitor_country = $object['country3'];
    } elseif (isset($object['country4'])){
        $visitor_country = $object['country4'];
    } elseif (isset($object['country5'])){
        $visitor_country = $object['country5'];
    } else {
        $visitor_country = $object['country6'];
    }
    
    
    //validate input data (datatype and regex)
    if(is_int($visitor_age) && preg_match('#^[a-zA-Z\s]+$#', $visitor_sex) && preg_match('#^[a-zA-Z\s]+$#', $visitor_country) && preg_match('#^[a-zA-Z\s]+$#', $visitor_region)){
        
        try{
            include('db_connection.php');

            // prepare sql
            $stmt = $pdo->prepare("INSERT INTO Visitor (age, sex, region, country) VALUES (:age, :sex, :region, :country)");
            
            //bind parameters
            $stmt->bindParam(':age', $age);
            $stmt->bindParam(':sex', $sex);
            $stmt->bindParam(':region', $region);
            $stmt->bindParam(':country', $country);

            // insert a row    
            $age = $visitor_age;
            $sex = $visitor_sex;
            $region = $visitor_region;
            $country = $visitor_country;
            $stmt->execute();

            //get visitorID from database, echo to receive with javascript
            $id = $pdo->lastInsertId();
            
            header("Content-Type:application/json");
            echo $id;
            

        }catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
        };

        $pdo = null;
    };
?>