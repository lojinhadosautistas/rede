import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC3jisbwoN9p0GJzAzfld3Y2l25ZtqIrEg",
  authDomain: "sistema-rede.firebaseapp.com",
  projectId: "sistema-rede",
  storageBucket: "sistema-rede.appspot.com",
  messagingSenderId: "930399212687",
  appId: "1:930399212687:web:a89c0d73be4b9fbd488cfa"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔒 ESPERA O DOM CARREGAR
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) {
    console.warn("loginForm não encontrado");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "hub.html";
      })
      .catch((error) => {
        alert("Erro no login: " + error.message);
      });
  });
});
