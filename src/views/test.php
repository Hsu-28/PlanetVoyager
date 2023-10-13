<?php
try{
//引入連線工作的檔案
header('Access-Control-Allow-Origin:*');  //這邊決定要不要跨域
header("Content-Type:application/json;charset=utf-8"); //用utf-8編碼成jason傳資料

require_once("../../../connectdb.php");
//這邊是說要抓取這個php檔案，就是剛剛那支跟資料庫連線的php
//這邊很重要!!，之後大家路徑會不一樣要自己再改!!

//如果想測試就加上這行 然後再開啟php看有沒有echo成功
// echo "這樣就連線成功了";

// 下sql指令，並包裝
   $sql_query = "SELECT  
   mem_no, mem_level, email, address, mem_name, mem_phone, mem_gender, mem_birthday, mem_passport, donate_sum, mem_nickname, mem_pic, mem_pw
  FROM member WHERE mem_no = '1' ";

    $sql_query = "SELECT  
    trip_date
    FROM trip WHERE trip_no = '1'";

  $sql_query = "SELECT  
  orders_date, total_amount, ord_people
  FROM orders WHERE mem_no = '1'";

  $sql_query = "SELECT  
  content_title
  FROM itinerary WHERE itinerary_no = '1'";


 // 下sql指令，並包裝
//  $sql_query1 = "SELECT mem_no, mem_level, email, address, mem_name, mem_phone, mem_gender, mem_birthday, mem_passport, donate_sum, mem_nickname, mem_pic, mem_pw FROM member WHERE mem_no = '1' ";

//  $sql_query2 = "SELECT trip_date FROM trip WHERE trip_no = '1'";

//  $sql_query3 = "SELECT orders_date, total_amount, ord_people FROM orders WHERE mem_no = '1'";

//  $sql_query4 = "SELECT content_title FROM itinerary WHERE itinerary_no = '1'";

//  $statement1 = $pdo->query($sql_query1);
//  $result1 = $statement1->fetch(PDO::FETCH_ASSOC);

//  $statement2 = $pdo->query($sql_query2);
//  $result2 = $statement2->fetch(PDO::FETCH_ASSOC);

//  $statement3 = $pdo->query($sql_query3);
//  $result3 = $statement3->fetch(PDO::FETCH_ASSOC);

//  $statement4 = $pdo->query($sql_query4);
//  $result4 = $statement4->fetch(PDO::FETCH_ASSOC);





 $statement = $pdo->query($sql_query);
 $result = $statement->fetch(PDO::FETCH_ASSOC);

// 告訴接收端 資料用json包裝，打開的時候用json解譯
header("Content-Type: application/json");
echo json_encode($result);

// echo json_encode(['result1' => $result1, 'result2' => $result2, 'result3' => $result3, 'result4' => $result4]);



}



catch (Exception $e) {
    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤原因 : ", $e->getMessage(), "<br>";
    //echo "這邊我懶惰解釋，隨便反正不會錯"; 
}


?>