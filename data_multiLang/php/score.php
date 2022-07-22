<?php
    $requestPayload = file_get_contents("php://input");
    $object = json_decode($requestPayload,true);
    
    $visitor_id = intval($object['visitor_id']);
    $score_gen = intval($object['General']);
    $score_phis = intval($object['Phishing']);
    $score_oe = intval($object['Online Environment']);
    $score_pa = intval($object['Physical Attacks']);
        
    try{
        include('db_connection.php');

        // prepare sql
        $stmt = $pdo->prepare("INSERT INTO Score (general, phishing, online_environment, physical_attacks, test_time, visitor_id) VALUES (:gen, :phis, :oe, :pa, now(), :fk_id)");
        
        //bind parameters
        $stmt->bindParam(':gen', $gen);
        $stmt->bindParam(':phis', $phis);
        $stmt->bindParam(':oe', $oe);
        $stmt->bindParam(':pa', $pa);
        $stmt->bindParam(':fk_id', $fk_id);

        // insert a row  
        $gen = $score_gen;
        $phis = $score_phis;
        $oe = $score_oe;
        $pa = $score_pa;
        $fk_id = $visitor_id;
        $stmt->execute();

    }catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    };

    $pdo = null;
?>
?>