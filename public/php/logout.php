<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json"); 
//驗證登入
require_once("./verifyFrontLogin.php");

session_destroy();
//刪除當前用戶對應的 session 檔案以及釋放 session ID，內存中的 $_SESSION 變數內容依然保留。

echo json_encode(["msg"=>"已登出"]);
return true;


?>