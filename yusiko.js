let percent = 0;
const target = 70; 
const progress = document.getElementById("progress-fill");
const percentText = document.getElementById("percent");

const interval = setInterval(() => {
  if (percent >= target) {
    clearInterval(interval);
  } else {
    percent++;
    progress.style.width = percent + "%";
    percentText.textContent = percent + "%";
  }
}, 50);
 
 function openLogin() {
    document.getElementById('popup').style.display = 'block';
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  window.onload = function() {
  document.getElementById('popup').style.display = 'none';
  }

   document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const isChecked = document.getElementById("subscribe").checked;
    const message = document.getElementById("message");
    message.textContent = ""; 
    message.style.color = ""; 

    if (!isChecked) {
      message.textContent = "Zəhmət olmasa checkbox-u seçin.";
      message.style.color = "red";
      return;
    } else if (email.includes("@") && email.includes(".")) {
      message.textContent = "Giriş uğurlu alındı!";
      message.style.color = "green";
    } else {
      message.textContent = "Email düzgün deyil!";
      message.style.color = "red";
    }
  });
});
    