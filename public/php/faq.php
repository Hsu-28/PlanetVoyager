<?php 
try{
//引入連線工作的檔案
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 
require_once("../../../connectdb.php");




// 下sql指令
$sql_query = "SELECT * FROM `faq`";
$statement = $pdo->query($sql_query);
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

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