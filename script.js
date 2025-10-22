
    document.getElementById("burtguuleh").addEventListener("submit", function(e) {
      e.preventDefault(); // form шинэчлэхгүй байлгах
      const name = document.getElementById("ner").value.trim();
      const pass = document.getElementById("pass").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name && pass && email) {
        // бүх талбар бөглөгдсөн бол form-ийг устгах
        document.getElementById("loginBox").remove();
        alert("Амжилттай нэвтэрлээ!");
      } else {
        alert("Бүх талбарыг бөглөнө үү!");
      }
    });
 function showlogin() {
  const loginBox = document.getElementById("loginBox");
  const loginContent = document.getElementById("loginContent");

  // show overlay
  loginBox.classList.remove("hidden");

  // animate popup
  setTimeout(() => {
    loginContent.classList.remove("scale-95", "opacity-0");
    loginContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function hideLogin() {
  const loginBox = document.getElementById("loginBox");
  const loginContent = document.getElementById("loginContent");

  // hide with animation
  loginContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    loginBox.classList.add("hidden");
  }, 200);
}

      
    
  