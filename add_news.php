<?php include "service/database.php"; ?>

<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}


if (isset($_POST['submit'])) {
    $title = $_POST['title'];
    $category = $_POST['category'];
    $content = $_POST['content'];

    $image = $_FILES['image']['name'];
    $tmp = $_FILES['image']['tmp_name'];
    $uploadPath = 'uploads/' . $image;
    move_uploaded_file($tmp, $uploadPath);

    $sql = "INSERT INTO news (title, category, image, content) VALUES ('$title', '$category', '$image', '$content')";
    $db->query($sql);
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Tambah Berita</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">📝 Tambah Berita</h5>
          </div>
          <div class="card-body">
            <form method="POST" enctype="multipart/form-data">
              <div class="mb-3">
                <label class="form-label">Judul Berita</label>
                <input type="text" name="title" class="form-control" placeholder="Masukkan judul berita" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Kategori</label>
                <input type="text" name="category" class="form-control" placeholder="Contoh: Job Tip, Event, Info" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Gambar</label>
                <input type="file" name="image" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Konten Berita</label>
                <textarea name="content" rows="5" class="form-control" placeholder="Tulis isi berita di sini..." required></textarea>
              </div>
              <div class="d-grid">
                <button name="submit" class="btn btn-success">Simpan</button>
              </div>
            </form>
          </div>
        </div>
        <div class="text-center mt-3">
          <a href="index.php" class="btn btn-link">⬅️ Kembali ke Daftar Berita</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
