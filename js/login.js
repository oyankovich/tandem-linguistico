import { usuarios } from "./datos.js";

document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  const mensajeLogin = document.getElementById("mensajeLogin");
  const usuarioNav = document.getElementById("usuarioNav");

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault(); 

      const emailInput = document.getElementById("email").value.trim();
      const passwordInput = document.getElementById("password").value.trim();

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === emailInput && u.password === passwordInput
      );

      if (usuarioEncontrado) {
        mensajeLogin.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            ¡Bienvenido/a, <strong>${usuarioEncontrado.nombre}</strong>! Sesión iniciada correctamente.
          </div>
        `;
        
        if (usuarioNav) {
          usuarioNav.textContent = `👤 ${usuarioEncontrado.email}`;
        }

        formLogin.reset();
      } else {
        mensajeLogin.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Error: El email o la contraseña son incorrectos. Inténtalo de nuevo.
          </div>
        `;
      }
    });
  }
});