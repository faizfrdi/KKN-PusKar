<?php
include "service/database.php";
$id = $_GET['id'];
$q = $db->query("SELECT * FROM news WHERE id = $id");
$data = $q->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title><?= $data['title'] ?> | Pusat Karier</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container py-5">
    <a href="news.php" class="btn btn-secondary mb-4">&larr; Kembali ke Berita</a>

    <div class="card shadow-sm">
      <img src="uploads/<?= $data['image'] ?>" class="card-img-top" alt="<?= $data['title'] ?>" style="max-height: 400px; object-fit: cover;">
      <div class="card-body">
        <h3 class="card-title fw-bold"><?= $data['title'] ?></h3>
        <p class="text-muted"><?= $data['category'] ?> | <?= date("d M Y", strtotime($data['created_at'])) ?></p>
        <hr>
        <p class="card-text" style="text-align: justify; line-height: 1.7;">
          <?= nl2br($data['content']) ?>
        </p>
      </div>
    </div>
  </div>
</body>
</html>

