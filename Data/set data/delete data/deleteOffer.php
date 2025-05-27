<?php
$conn = new mysqli('localhost' , 'root' , '' , 'LaBiga');

$id = $_POST['id-of-offer'];
$st = $conn->query(
    "DELETE FROM `offers` WHERE `offers`.`id` = $id"
);

$response = ['success' => false];

if ($st) {
    $response['success'] = true;
}
$conn->close();
 echo json_encode($response);
exit;
?>