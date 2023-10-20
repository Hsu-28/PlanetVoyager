<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 

// $headerCookies = explode('; ', getallheaders()['Cookie']);
// $cookies = array();
// foreach($headerCookies as $itm) {
//     list($key, $val) = explode('=', $itm, 2);
//     $cookies[$key] = $val;
// }
// $getSessionId = $cookies["PHPSESSID"]??"";
// session_id($getSessionId);
// session_start();
// $getUser = $_SESSION??[];
// if ( empty( $getUser ) ) {
//     echo json_encode(["msg"=>"已登出",'session_id'=>session_id()]);
//     die();
// }
session_start();
echo $_SESSION['memId'];
if(!isset($_SESSION['memId'])) {
    $response = ["msg" => "未登入"];
    echo json_encode($response);
}else {
    $response = ["msg" => "已登入"];
    echo json_encode($response);
}
?>
