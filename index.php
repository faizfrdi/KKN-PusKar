<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

include "service/database.php";
$data = $db->query("SELECT * FROM news ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Daftar Berita</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container py-5">
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="fw-bold mb-0">📢 Daftar Berita</h2>
    <a href="add_news.php" class="btn btn-primary">
      + Tambah Berita
    </a>
  </div>

  <div class="row g-4">
    <?php while ($row = $data->fetch_assoc()): ?>
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="uploads/<?= $row['image'] ?>" class="card-img-top" style="height: 220px; object-fit: cover;" alt="Gambar Berita">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title"><?= $row['title'] ?></h5>
            <p class="text-muted mb-2 small">
              <span class="badge bg-info text-dark"><?= $row['category'] ?></span>
              <span class="ms-2"><i class="bi bi-calendar3"></i> <?= date('d M Y', strtotime($row['created_at'])) ?></span>
            </p>
            <div class="mt-auto">
              <a href="edit_news.php?id=<?= $row['id'] ?>" class="btn btn-sm btn-warning me-1">
                ✏️ Edit
              </a>
              <a href="delete_news.php?id=<?= $row['id'] ?>" class="btn btn-sm btn-danger" onclick="return confirm('Hapus berita ini?')">
                🗑️ Hapus
              </a>
            </div>
          </div>
        </div>
      </div>
    <?php endwhile; ?>
  </div>
</div>

<!-- Bootstrap Icons (Optional) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</body>
</html>
