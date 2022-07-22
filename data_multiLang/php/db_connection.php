<?php
    $pdo = new PDO('mysql:host=localhost;dbname=Cyberwareness', 'InsertUser', 'rMFfpcis2lmQUJHA', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

    //disable emulated prepared statements
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>