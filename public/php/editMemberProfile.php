<?php
// print_r(123); exit;
// error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');


try{
    //引入連線工作的檔案
    require_once("../../../connect_chd103g3.php");

    
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     header("Access-Control-Allow-Origin: *");
//     header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
//     header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//     exit;
// }

    // echo "id : ", session_id() ,"<br>";
    // //自session中取回登入者資料
    // echo "帳號 : ", $_SESSION["memId"], "<br>";
    // echo "姓名 : ", $_SESSION["memName"], "<br>";  
    // echo "email : ", $_SESSION["email"], "<br>";


    $sql = "UPDATE member SET 
    mem_name = :mem_name, 
    mem_nickname = :mem_nickname, 
    mem_gender = :mem_gender, 
    mem_birthday = :mem_birthday,
    mem_phone = :mem_phone,
    email = :email,
    address = :address,
    mem_passport = :mem_passport
    WHERE mem_no = :mem_no";
    // $data = json_decode(file_get_contents('php://input'), true);
    // var_dump($data);
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);


    if (isset($_POST['mem_name'], $_POST['mem_nickname'], $_POST['mem_gender'], 
    $_POST['mem_birthday'], $_POST['mem_phone'], $_POST['email'],$_POST['address'], 
    $_POST['mem_passport'])) {
        $editPro = $pdo->prepare($sql);
        $editPro->bindValue(":mem_name", $_POST["mem_name"]);
        $editPro->bindValue(":mem_nickname", $_POST["mem_nickname"]);
        $editPro->bindValue(":mem_gender", $_POST["mem_gender"]);
        $editPro->bindValue(":mem_birthday", $_POST["mem_birthday"]);
        $editPro->bindValue(":mem_phone", $_POST["mem_phone"]);
        $editPro->bindValue(":email", $_POST["email"]);
        $editPro->bindValue(":address", $_POST["address"]);
        $editPro->bindValue(":mem_passport", $_POST["mem_passport"]);
        $editPro->bindValue(":mem_no", $_POST["mem_no"]);
        $editPro->execute();

        http_response_code(200);
        echo json_encode(["message" => "編輯成功"]);
    } else {
        http_response_code(400);
        echo json_encode(["error" => "缺少必要 Data"]);
    }


    }catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>"; 
    }

?>