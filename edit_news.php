<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}


include "service/database.php";

$id = $_GET['id'];
$q = $db->query("SELECT * FROM news WHERE id = $id");
$data = $q->fetch_assoc();

if (isset($_POST['update'])) {
    $title = $_POST['title'];
    $category = $_POST['category'];
    $content = $_POST['content'];

    if ($_FILES['image']['name']) {
        $image = $_FILES['image']['name'];
        $tmp = $_FILES['image']['tmp_name'];
        move_uploaded_file($tmp, 'uploads/' . $image);
        $db->query("UPDATE news SET title='$title', category='$category', image='$image', content='$content' WHERE id=$id");
    } else {
        $db->query("UPDATE news SET title='$title', category='$category', content='$content' WHERE id=$id");
    }

    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Edit Berita</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">✏️ Edit Berita</h5>
          </div>
          <div class="card-body">
            <form method="POST" enctype="multipart/form-data">
              <div class="mb-3">
                <label class="form-label">Judul Berita</label>
                <input type="text" name="title" class="form-control" value="<?= $data['title'] ?>" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Kategori</label>
                <input type="text" name="category" class="form-control" value="<?= $data['category'] ?>" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Gambar Saat Ini</label><br>
                <?php if (!empty($data['image'])) : ?>
                  <img src="uploads/<?= $data['image'] ?>" alt="Gambar Lama" class="img-thumbnail mb-2" width="150">
                <?php else: ?>
                  <p class="text-muted fst-italic">Tidak ada gambar</p>
                <?php endif; ?>
              </div>
              <div class="mb-3">
                <label class="form-label">Ganti Gambar (kosongkan jika tidak ingin ganti)</label>
                <input type="file" name="image" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Konten Berita</label>
                <textarea name="content" rows="6" class="form-control" required><?= $data['content'] ?></textarea>
              </div>
              <div class="d-flex justify-content-between">
                <button name="update" class="btn btn-success">💾 Simpan Perubahan</button>
                <a href="index.php" class="btn btn-secondary">❌ Batal</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
