<?php
// عرض جميع الأخطاء أثناء التطوير
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// إعداد الاتصال
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "LaBiga";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$table = "categories";
$sql = "SELECT * FROM $table";
$result = $conn->query($sql);

$data = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
$conn->close();

// إعادة البيانات بصيغة JSON
header('Content-Type: application/json');
echo json_encode($data);
exit;