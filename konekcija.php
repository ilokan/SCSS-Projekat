<?php


try{
    $pdo=new PDO("mysql:host=localhost;dbname=podaci", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo "Konekcija nije uspjesna!". $e->getMessage();
}



?>