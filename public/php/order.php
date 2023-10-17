<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=utf-8");
try {

    //新增專輯 (alb_img獻給空字串) -> 取得alb_id 
    // ->上傳複製檔案.更改檔名 -> 更改資料庫中alb_img的值 ->把歌曲加入專輯


    //引入連線工作的檔案
    require_once("../../../connectdb.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $passenger_name = $_POST["lastName"] . " " . $_POST["name"];
    $passenger_gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
    $passenger_nationality = $_POST["nation"];
    $passport = $_POST["passId"];
    $shirt_size = $_POST["size"];
    $status = $_POST["status"];
    $passenger_diet = $_POST["other"];
    $seat_no = $_POST["seatIndex"];
    $a_size = $_POST["ssize"];
    $color = $_POST["scolor"];}

 // 准备SQL语句
    $sql = "INSERT INTO passenger (passenger_name, passenger_gender, birthday, passenger_nationality, passport, shirt_size, status, passenger_diet, seat_no, a_size, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssssss", $passenger_name, $passenger_gender, $birthday, $passenger_nationality, $passport, $shirt_size, $status, $passenger_diet, $seat_no, $a_size, $color);

    // 执行SQL语句
    if ($stmt->execute()) {
        echo "乘客信息已成功插入到数据库。";
    } else {
        echo "插入数据时出错：" . $stmt->error;
    }


    echo json_encode($errorResponse);
}