<?php 
try{
//引入連線工作的檔案
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 
require_once("../../connect_chd103g3.php");

session_start(); //啟動session

// 下sql指令
$sql_query = "SELECT `mem_name`, `email`, `address` FROM `member` where `mem_no` = :mem_no";

$stmt = $pdo->prepare($sql_query);
$stmt->bindParam(':mem_no', $_SESSION["mem_no"]);
$stmt = $pdo->query($sql_query);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// 返回数据
header("Content-Type: application/json");
echo json_encode($result);

}

catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>"; 
}


?>