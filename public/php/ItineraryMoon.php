<?php
try {
    // 引入连接数据库的文件
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json");
    require_once("../../../connectdb.php");

    // SQL 查询1
    $sql_query = "SELECT planet_subtitle, itinerary_day FROM itinerary WHERE itinerary_no = 2";
    $statement = $pdo->query($sql_query);
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    // SQL 查询2
    $sql_query_2 = "SELECT * FROM itinerary_photos WHERE itinerary_no = 2";
    $statement = $pdo->query($sql_query_2);
    $result2 = $statement->fetchAll(PDO::FETCH_ASSOC);

    // 合并结果为一个关联数组
    $combinedResult = [
        "itinerary" => $result,
        "itinerary_photos" => $result2
    ];

    // 返回 JSON 数据
    header("Content-Type: application/json");
    echo json_encode($combinedResult);
} catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "系統暫時不能正常運行，請稍後再試<br>"; 
}
?>
