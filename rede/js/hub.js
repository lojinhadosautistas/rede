// hub.js — Sistema REDE

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* =========================
   FIREBASE CONFIG
========================= */
// ⚠️ ajuste depois com seu projeto real
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJECT.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* =========================
   PROTEÇÃO DO HUB
========================= */
onAuthStateChanged(auth, user => {
  if (!user) {
    // não logado → volta pro login
    window.location.href = "login.html";
    return;
  }

  console.log("Usuário logado:", user.email);
  // aqui entra roles depois
});

/* =========================
   LOGOUT
========================= */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", e => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        window.location.href = "login.html";
      })
      .catch(err => {
        console.error("Erro ao sair:", err);
      });
  });
}
