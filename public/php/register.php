<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=utf-8");

try{
    
    require_once("./connect.php");
	$sql = "INSERT INTO `member` (`email`, `address`, `mem_name`, `mem_phone`, `mem_passport`, `mem_pw`) VALUES (:email, :address, :mem_name, :mem_phone, :mem_passport, :mem_pw)";

	$member = $pdo->prepare($sql);	
	$member->bindValue(":mem_name", $_POST["mem_name"]);
	$member->bindValue(":email", $_POST["email"]);
	$member->bindValue(":mem_pw", $_POST["mem_pw"]);
	$member->bindValue(":mem_passport", $_POST["mem_passport"]);
	$member->bindValue(":mem_phone", $_POST["mem_phone"]);
	$member->bindValue(":address", $_POST["address"]);
	$member->execute();

    $msg = "註冊成功";
}
catch (PDOException $e) {
	$msg = "錯誤行號 : ".$e->getLine().", 錯誤訊息 : ".$e->getMessage();
}

//輸出結果
$result = ["msg"=>$msg];
echo json_encode($result);

?>
