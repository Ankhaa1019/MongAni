// LOGIN FORM
document.getElementById("burtguuleh").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("ner").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && pass && email) {
    document.getElementById("loginBox").remove();
    alert("Амжилттай нэвтэрлээ!");
  } else {
    alert("Бүх талбарыг бөглөнө үү!");
  }
});

function showlogin() {
  const loginBox = document.getElementById("loginBox");
  const loginContent = document.getElementById("loginContent");
  loginBox.classList.remove("hidden");
  setTimeout(() => {
    loginContent.classList.remove("scale-95", "opacity-0");
    loginContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function hideLogin() {
  const loginBox = document.getElementById("loginBox");
  const loginContent = document.getElementById("loginContent");
  loginContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => loginBox.classList.add("hidden"), 200);
}

// VIDEO UPLOAD
const uploadForm = document.getElementById("uploadForm");
const videoInput = uploadForm.querySelector('input[name="video"]');
const trailer = document.getElementById("traailer");

videoInput.addEventListener("change", () => {
  const file = videoInput.files[0];
  if (file) trailer.src = URL.createObjectURL(file);
});

uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = videoInput.files[0];
  if (!file) return alert("Видео сонгоно уу!");

  const formData = new FormData();
  formData.append("video", file);

  const res = await fetch("/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  alert(data.message);
  loadVideos(); // upload хийсний дараа refresh
});

// VIDEO LIST LOAD
async function loadVideos() {
  const res = await fetch("/videosList");
  const videos = await res.json();
  const container = document.getElementById("videoList");
  container.innerHTML = "";

  videos.forEach(file => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 p-4 rounded-xl shadow-lg";

    card.innerHTML = `
      <video src="/uploads/${file}" controls class="w-full rounded-lg mb-2"></video>
      <p class="text-center text-white">${file}</p>
    `;
    container.appendChild(card);
  });
}

// Load videos on page load
window.addEventListener("DOMContentLoaded", loadVideos);
