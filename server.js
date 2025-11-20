const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

// ===== Видео хадгалах тохиргоо =====
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ===== HTML, CSS, JS serve хийх =====
app.use(express.static("."));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== Видео upload route =====
app.post("/upload", upload.single("video"), (req, res) => {
  res.send("🎉 Видео амжилттай upload боллоо!");
});

// ===== Uploaded videos-г JSON-аар өгөх =====
app.get("/videosList", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) return res.status(500).json([]);
    const videos = files.filter(file => /\.(mp4|mov|webm|mkv)$/i.test(file));
    res.json(videos);
  });
});

// ===== Сервер асаах =====
app.listen(PORT, () => {
  console.log(`🔥 Сервер ажиллаж байна: http://localhost:${PORT}`);
});
