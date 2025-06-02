<?php
$conn = new mysqli('localhost' , 'root' , '' , 'LaBiga');
if($conn->connect_error) {
    die($conn->connect_error);
}
$sql_query = "SELECT * FROM lang";
$result = $conn->query($sql_query);
$date = [];
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $date[] = $row;
    }
}
$conn->close();
echo json_encode($date);
exit;
?>