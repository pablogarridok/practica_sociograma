# 🧾 Proyecto de Formulario con Validación y Almacenamiento en JSON

Este proyecto consiste en un **formulario web completo** desarrollado con **HTML, CSS, JavaScript y PHP**, cuyo objetivo es **recoger, validar y almacenar** datos de usuarios en un archivo JSON.

---

## 📌 Estructura del Proyecto
```
📁 sociograma/
│
├── index.php                  # Formulario principal (HTML + PHP)
├── process.php                # Procesamiento y validación del formulario
├── includes/
│   ├── functions.php          # Funciones auxiliares para manejo de JSON y errores
│   ├── header.php             # Archivo que contiene el contenido del header
│   └── footer.php             # Archivo que contiene el contenido del footer
├── data/
│   └── respuestas.json        # Archivo donde se guardan las respuestas
├── assets/
│   ├── styles.css             # Estilos visuales del formulario
│   └── validate.js            # Validaciones en el lado del cliente (JavaScript)
└── README.md                  # Documentación del proyecto
```

---

## Funcionamiento General

### 1️⃣ **FRONTEND**

#### **index.php:**
El formulario contiene varios apartados:
- Datos personales  
- Preferencias de trabajo  
- Habilidades  
- Dinámica de trabajo  
- Organización y bienestar  
- Reflexión final  

#### **validate.js:**

El archivo `validate.js` se encarga de validar **los campos antes de enviar el formulario**, evitando errores comunes como:
- Campos vacíos  
- Formato de email incorrecto  
- Rangos inválidos (edad, nivel de Git, estrés, etc.)  

Si se encuentran errores, el envío se bloquea con `event.preventDefault()` y se muestran los errores en consola.

---

### 2️⃣ **BACKEND**

#### **process.php:**
El archivo `process.php` realiza la **validación en el servidor** para mayor seguridad:
- Comprueba que el método sea `POST`.
- Valida cada campo individualmente con `filter_input()` y `isset()`.
- Si hay errores, los guarda en `$_SESSION` y redirige de nuevo al formulario.
- Si todo es correcto, crea un array asociativo con los datos enviados.

Luego:
- Añade **fecha y hora** de envío.
- Guarda la información en `data/respuestas.json` usando funciones definidas en `functions.php`.

---

### 3️⃣ **INCLUDES**

#### **functions.php:**
Este archivo incluye funciones reutilizables:
- `load_json($path)` → carga el contenido de un JSON y lo convierte en array PHP.  
- `save_json($path, $data)` → guarda datos en un archivo JSON con formato legible.  
- `old_field()` y `field_error()` → permiten mantener valores y mostrar errores cuando el usuario vuelve al formulario tras una validación fallida.

#### **header.php y footer.php:**
Estos archivos incluyen el contenido del header y del footer respectivamente.

---

## 💾 respuestas.json

Todas las respuestas válidas se almacenan en este archivo en formato JSON con indentación legible.  

**Ejemplo de una entrada:**
```json
{
  "nombre": "Pablo Garrido",
  "clase": "DAW2",
  "email": "pablo@example.com",
  "edad": 21,
  "fecha_nacimiento": "2004-05-10",
  "rol": "Desarrollador Backend",
  "lenguaje": "PHP",
  "git": 8,
  "estres": 3,
  "hora_inicio": "mañana",
  "comentarios": "Prefiero trabajar en equipo cuando hay buena organización"
}
```