<?php 
try {
    // 引入連線工作的檔案
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json"); 
    require_once("../../../connectdb.php");

    $passenger_fname = $_POST['passenger_fname'];
$passenger_name = $_POST['passenger_name'];
$passenger_gender = $_POST['passenger_gender'];
$birthday = $_POST['birthday'];
$passenger_nationality = $_POST['passenger_nationality'];
$passport = $_POST['passport'];
$shirt_size = $_POST['shirt_size'];
$status = $_POST['status'];
$passenger_diet = $_POST['passenger_diet'];
$seat_no = $_POST['seat_no'];
$a_size = $_POST['a_size'];
$color = $_POST['color'];

    // 使用反引號括住表名和欄位名
    $sql = "INSERT INTO passenger (passenger_fname, passenger_name, passenger_gender, birthday, passenger_nationality, passport, shirt_size, status, passenger_diet, seat_no, a_size, color)
    VALUES (:passenger_fname, :passenger_name, :passenger_gender, :birthday, :passenger_nationality, :passport, :shirt_size, :status, :passenger_diet, :seat_no, :a_size, :color);
    ";

   
$stmt->bindParam(':passenger_fname', $passenger_fname);
$stmt->bindParam(':passenger_name', $passenger_name);
$stmt->bindParam(':passenger_gender', $passenger_gender);
$stmt->bindParam(':birthday', $birthday);
$stmt->bindParam(':passenger_nationality', $passenger_nationality);
$stmt->bindParam(':passport', $passport);
$stmt->bindParam(':shirt_size', $shirt_size);
$stmt->bindParam(':status', $status);
$stmt->bindParam(':passenger_diet', $passenger_diet);
$stmt->bindParam(':seat_no', $seat_no);
$stmt->bindParam(':a_size', $a_size);
$stmt->bindParam(':color', $color);
$stmt->execute('Data inserted successfully');
}



catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
