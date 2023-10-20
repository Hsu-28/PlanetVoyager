<?php


 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 header("Content-Type: application/json"); 

try{
     //引入連線工作的檔案
    require_once("../../connect_chd103g3.php");


        $id = $_GET['id'];  // 假設你已經確保 $id 的安全性

        $sql_query = "SELECT * FROM donate WHERE donate_id = $id 
        AND YEAR(donate_date) = 2022";


    // 下sql指令
    // $sql_query = "SELECT * FROM donate WHERE donate_id = ".$_GET['id'] AND YEAR(donate_date) = 2022;";
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