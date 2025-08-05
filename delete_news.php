<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

include "service/database.php";

$id = $_GET['id'];

// Hapus gambar dari folder jika perlu
$q = $db->query("SELECT image FROM news WHERE id = $id");
$data = $q->fetch_assoc();
$imagePath = 'uploads/' . $data['image'];
if (file_exists($imagePath)) {
    unlink($imagePath);
}

$db->query("DELETE FROM news WHERE id = $id");
header("Location: index.php");
?>
