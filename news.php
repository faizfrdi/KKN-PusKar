<?php include "service/database.php"; ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Berita | Pusat Karier</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <link rel="stylesheet" href="css/news.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #393981; height: 80px;">
    <div class="container">
      <a class="navbar-brand" href="#"> <img style="width: 151px; height: 60px;" src="asset/logo puskar.png" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex search-bar">
          <input class="form-control search-input me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
                
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white nav-lin active" aria-current="page" href="index.html">Home </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle. text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Jobs
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Vacancies</a></li>
              <li><a class="dropdown-item" href="#">Companies</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle. text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Community
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="event.html">Event</a></li>
              <li><a class="dropdown-item" href="newspage.html">News</a></li>
              <li><a class="dropdown-item" href="#">Forum</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active. text-white" aria-current="page" href="#">Counseling</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active. text-white" aria-current="page" href="#">Tracer Study</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active. text-white" aria-current="page" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active. text-white" aria-current="page" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero-section" style="margin-top: 5%; padding-top: 1px;">
    <div>
      <div class="text-center my-5">
      <h2 class="fw-bold karier-purple">NEWS</h2>
      </div>

      <div class="container py-5">
    <div class="row g-4">
      <?php
        $result = $db->query("SELECT * FROM news ORDER BY created_at DESC");
        while ($row = $result->fetch_assoc()):
      ?>
        <div class="col-md-4">
          <div class="card h-100 shadow-sm rounded-4">
            <img src="uploads/<?= $row['image'] ?>" class="card-img-top" alt="<?= $row['title'] ?>" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h6 class="fw-bold"><?= $row['title'] ?></h6>
              <span class="badge bg-primary"><?= $row['category'] ?></span>
              <p class="text-muted mt-1 small"><?= date("d M Y", strtotime($row['created_at'])) ?></p>
              <a href="news_detail.php?id=<?= $row['id'] ?>" class="btn btn-sm btn-outline-primary">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      <?php endwhile; ?>
    </div>
  </div>
    </div>
  </section>
</body>
</html>
