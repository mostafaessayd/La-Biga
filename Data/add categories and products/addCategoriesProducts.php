<?php
$host = 'localhost';
$dbName = 'LaBiga';
$user = 'root';
$pass = '';

// الاتصال بقاعدة البيانات
$conn = new mysqli($host, $user, $pass, $dbName);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['table'])) {
        die("الجدول غير محدد.");
    }

    $table = $_POST['table'];

    if ($table === 'categories') {
        if (!isset($_POST['category_name'])) {
            die("اسم الصنف مطلوب.");
        }

        $category_name = $conn->real_escape_string($_POST['category_name']);

        $stmt = $conn->prepare("INSERT INTO categories (name) VALUES (?)");
        $stmt->bind_param("s", $category_name);

        if ($stmt->execute()) {
            echo "تمت إضافة الصنف بنجاح.";
        } else {
            echo "خطأ في إضافة الصنف: " . $stmt->error;
        }

        $stmt->close();

    } elseif ($table === 'products') {
        if (
            !isset($_POST['product_name']) ||
            !isset($_POST['category']) ||
            !isset($_POST['description']) ||
            !isset($_POST['price'])
        ) {
            die("جميع بيانات المنتج مطلوبة.");
        }

        $product_name = $conn->real_escape_string($_POST['product_name']);
        $category = $conn->real_escape_string($_POST['category']);
        $description = $conn->real_escape_string($_POST['description']);
        $price = floatval($_POST['price']);

        $stmt = $conn->prepare("
            INSERT INTO products (product_name, name, description, price)
            VALUES (?, ?, ?, ?)
        ");
        $stmt->bind_param("sssd", $product_name, $category, $description, $price);

        if ($stmt->execute()) {
            echo "تمت إضافة المنتج بنجاح.";
        } else {
            echo "خطأ في إضافة المنتج: " . $stmt->error;
        }

        $stmt->close();

    } else {
        echo "اسم الجدول غير صحيح.";
    }
} else {
    echo "الطلب يجب أن يكون عبر POST فقط.";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        location.href = '../../views/layouts/menu/add categories and products/';
    </script>
</body>
</html>