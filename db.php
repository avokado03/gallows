<?php
try{
    $connection = new PDO('mysql:host=localhost;dbname=hangman','root','');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $ex){
    echo "Не удалось подключиться к базе данных";
    echo $ex->getMessage();
}

