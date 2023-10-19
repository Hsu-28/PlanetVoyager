<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 


try{
    //引入連線工作的檔案
    require_once("../../../connect_chd103g3.php");

    // 準備update SQL
    $sql = "

    UPDATE member SET mem_pw = :mem_pw
        
    WHERE mem_no = :mem_no";

    $editPsw = $pdo->prepare($sql);

    $editPsw->bindValue(":password", $_POST["password"]);
    $editPsw->bindValue(":mem_no", $_POST["mem_no"]);

    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);


    if (isset($_POST['mem_pw'],$_POST['mem_no'])) {
        $editPro = $pdo->prepare($sql);
        $editPro->bindValue(":mem_pw", $_POST["mem_pw"]);
        $editPro->bindValue(":mem_no", $_POST["mem_no"]);
        $editPro->execute();
    
        http_response_code(200);
        echo json_encode(["message" => "編輯成功"]);
    } else {
        http_response_code(400);
        echo json_encode(["error" => "缺少必要 Data"]);
    }

    }catch (Exception $e) {
         echo "錯誤行號 : ", $e->getLine(), "<br>";
         echo "錯誤原因 : ", $e->getMessage(), "<br>";
         //echo "系統暫時不能正常運行，請稍後再試<br>"; 
    }
?>