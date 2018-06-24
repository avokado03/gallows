<?php
include_once 'db.php';
$name=null;
$category ="";
$word="";
$query="";
try{
    $name= $_POST['name'];
    if (isset($name)) {
        $insName=$connection->prepare("INSERT INTO users VALUES(:username)");
        $insName->execute(array(
            ':username'=>$name
        ));
    }
    $category = $connection->query("SELECT * FROM categories ORDER BY RAND() LIMIT 0,1");
    $categoryResult=$category->fetch(PDO::FETCH_OBJ);
    $categoryId = $categoryResult->categories_id;
    $query="SELECT words_id, words_value FROM words WHERE categories_id = ".$categoryId."ORDER BY RAND() LIMIT 0,1";
    $word=$connection->query($query);
    $wordResult=$word->fetch(PDO::FETCH_OBJ);
    $arrJson=[$categoryResult,$wordResult];
    echo json_encode($arrJson);
}
catch (PDOException $ex) {
    echo "Не удалось выполнить запросы!";
    echo $ex->getMessage();
}
