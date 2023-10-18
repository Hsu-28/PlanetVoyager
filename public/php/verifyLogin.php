<?php 
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

if(! isset($_SESSION['memId'])) {
   alert('請先登入會員')
}
?>