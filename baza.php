<?php
    

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $ime = $_POST['ime'];
        $email = $_POST['email'];
        $textarea = $_POST['textarea'];

        try{
            require_once "konekcija.php";

            $upit = "INSERT INTO forma (ime,email,textarea) VALUES (?, ?, ?);";

            $stmt = $pdo->prepare($upit);
            $stmt->execute([$ime, $email, $textarea]);
            $pdo = null;
            $stmt = null;   

            header("Location: kontakt.html");

            die();

        }catch(PDOException $e){
            die("Neuspjesan upit: ". $e->getMessage());
        }
    }
    else{
        header("Location: kontakt.html");
    }
    
    ?>

