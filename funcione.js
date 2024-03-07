import * as Secret from "./encriptacion.js";
let usuarios = [];
let binicia = document.getElementById("IniciarF");
binicia.addEventListener("click", () => {
  let nombreUsuario = document.getElementById("NombreU").value;
  let contraseñaUsuario = document.getElementById("ContraseñaU").value;
  let usuarioEncontrado = usuarios.find(
    (user) =>
      user.nombre === nombreUsuario &&
      Secret.decrypt_data(user.contraseña) === contraseñaUsuario
  );
  if (usuarioEncontrado) {
    alert("¡Inicio de sesión exitoso!");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
document.getElementById("RegistrarseF").addEventListener("click", () => {
  let nombreUsuario = document.getElementById("NombreU").value;
  let contraseñaUsuario = document.getElementById("ContraseñaU").value;
  if (nombreUsuario.trim() !== "" && contraseñaUsuario.trim() !== "") {
    if (!usuarios.find((user) => user.nombre === nombreUsuario)) {
      contraseñaUsuario = Secret.encrypt_data(contraseñaUsuario);
      console.log("Te has Registrado");
      console.log("La contraseña encriptada es: " + contraseñaUsuario);
      usuarios.push({ nombre: nombreUsuario, contraseña: contraseñaUsuario });
      console.log(usuarios[0]);

      alert("¡Registro exitoso! Puedes iniciar sesión ahora.");
    } else {
      alert("El nombre de usuario ya está en uso. Por favor, elige otro.");
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
