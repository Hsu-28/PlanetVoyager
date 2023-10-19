<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 

try{
  require_once("../../connect_chd103g3.php");
  $sql = "select * from `member` where email=:memId and mem_pw=:memPsw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();

  if ( $member->rowCount()=== 0) { //查無此人, 帳密錯誤
    $result = ["error" => true, "msg" => "帳號或密碼錯誤"];
    echo json_encode($result);
    return;
  } else { //登入成功

    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    session_start();
    $_SESSION["mem_no"] = $memRow["mem_no"];
    $_SESSION["memId"] = $memRow["email"];
    $_SESSION["mem_pw"] = $memRow["mem_pw"];
    //送出登入者的姓名資料
    $result = ["memId"=>$memRow["email"], "memPsw"=>$memRow["mem_pw"],"error" => false, "memInfo"=>$_SESSION,"session_id"=>session_id()];
    echo json_encode($result);
  }
} catch (PDOException $e) {
  $result = ["error" => true, "msg" => $e->getMessage()];
	echo json_encode($result);
}

?>