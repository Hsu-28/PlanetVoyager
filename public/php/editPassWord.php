<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 


try{
    //引入連線工作的檔案
    require_once("../../../connect_chd103g3.php");

    // echo "id : ", session_id() ,"<br>";
    // //自session中取回登入者資料
    // echo "帳號 : ", $_SESSION["memId"], "<br>";
    // echo "姓名 : ", $_SESSION["memName"], "<br>";  
    // echo "email : ", $_SESSION["email"], "<br>";


    $sql = "

    UPDATE member SET mem_pw = :newPw
    
    // WHERE email = :email";

    $editPsw = $pdo->prepare($sql);

    $editPsw->bindValue(":password", $_POST["password"]);
    // $editPsw->bindValue(":email", $_POST["email"]);

    // 執行 SQL 更新
    $editPsw->execute();

    // 如果更新成功
    $responseMessage = "更新成功";

    echo json_encode($responseMessage);

    }catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>"; 
    }

?>