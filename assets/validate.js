document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let errors = [];

    // ====== Datos Personales ======
    const nombre = form.nombre.value.trim();
    const clase = form.clase.value;
    const email = form.email.value.trim();
    const edad = form.edad.value;
    const fecha_nacimiento = form.fecha_nacimiento.value;

    if (nombre.length < 2 || nombre.length > 100) {
      errors.push("El nombre debe tener entre 2 y 100 caractere.");
    }

    if (!clase) {
      errors.push("La clase es obligatoria.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("El email no es válido.");
    }

    if (isNaN(edad) || edad < 0 || edad > 120) {
      errors.push("La edad debe ser un número entre 0 y 120.");
    }

    if (!fecha_nacimiento) {
      errors.push("La fecha de nacimiento es obligatoria.");
    }

    // ====== Preferencias de trabajo ======
    const preferenciaPositivaInput = form.preferenciaPositivaInput.value.trim();
    const motivoPositivo = form.motivoPositivo.value.trim();
    const color_favorito = form.color_favorito.value;

    if (!preferenciaPositivaInput) {
      errors.push("La preferencia positiva es obligatoria.");
    }

    if (!motivoPositivo) {
      errors.push("El motivo de la preferencia positiva es obligatorio.");
    }

    if (!color_favorito) {
      errors.push("El color favorito es obligatorio.");
    }

    // ====== Habilidades ======
    const rol = form.rol.value;
    const lenguaje = form.lenguaje.value;
    const temas = form.querySelectorAll('input[name="temas[]"]:checked');
    const git = form.git.value;
    const liderado = form.liderado.value;

    if (!rol) {
      errors.push("El rol es obligatorio.");
    }

    if (!lenguaje) {
      errors.push("El lenguaje de programación es obligatorio.");
    }

    if (temas.length === 0) {
      errors.push("Selecciona al menos un tema que te gustaría aprender.");
    }

    if (isNaN(git) || git < 0 || git > 10) {
      errors.push("El nivel de Git debe ser un número entre 0 y 10.");
    }

    if (!liderado) {
      errors.push("El liderazgo de proyectos es obligatorio.");
    }

    // ====== Dinámica de trabajo ======
    const comunicacion = form.comunicacion.value;
    const frecuencia_reuniones = form.frecuencia_reuniones.value;
    const trabajo_equipo = form.trabajo_equipo.value;
    const conflictos = form.conflictos.value;

    if (!comunicacion) {
      errors.push("La comunicación es obligatoria.");
    }

    if (!frecuencia_reuniones) {
      errors.push("La frecuencia de reuniones es obligatoria.");
    }

    if (!trabajo_equipo) {
      errors.push("El trabajo en equipo es obligatorio.");
    }

    if (!conflictos) {
      errors.push("La gestión de conflictos es obligatoria.");
    }

    // ====== Organización y bienestar ======
    const gestion_tiempo = form.gestion_tiempo.value;
    const estres = form.estres.value;
    const entorno = form.entorno.value;
    const bienestar = form.bienestar.value;

    if (!gestion_tiempo) {
      errors.push("La gestión del tiempo es obligatoria.");
    }

    if (isNaN(estres) || estres < 1 || estres > 5) {
      errors.push("El nivel de estrés debe ser un número entre 1 y 5.");
    }

    if (!entorno) {
      errors.push("El entorno de trabajo es obligatorio.");
    }

    if (!bienestar) {
      errors.push("El bienestar es obligatorio.");
    }

    // ====== Reflexión ======
    const hora_inicio = form.hora_inicio.value;
    const comentarios = form.comentarios.value.trim();

    if (!hora_inicio) {
      errors.push("La hora del día productiva es obligatoria.");
    }

    // ====== Mostrar errores ======
    if (errors.length > 0) {
      event.preventDefault();
      console.log("⚠️ Se encontraron los siguientes errores:\n\n" + errors.join("\n"));
    }
  });
});