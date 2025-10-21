
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
  