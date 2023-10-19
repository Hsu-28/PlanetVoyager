<?php 
try {
    // 引入連線工作的檔案
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json"); 
    require_once("../../../connect_chd103g3.php");

    $donate_id = $_POST['donate_id'];
    $donate_amount = $_POST['donate_amount'];
    $donate_stat = $_POST['donate_stat'];
    $email = $_POST['email'];

    // 使用反引號括住表名和欄位名
    $sql = "INSERT INTO `donate` (`donate_id`, `donate_amount`, `donate_stat`, `email`)
            VALUES (:donate_id, :donate_amount, :donate_stat, :email)";

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':donate_id', $donate_id);
    $stmt->bindParam(':donate_amount', $donate_amount);
    $stmt->bindParam(':donate_stat', $donate_stat);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
}
catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>
