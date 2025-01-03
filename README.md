# 🐝 Bee Key Frontend

Este proyecto es el frontend para el sistema Bee Key, una herramienta diseñada para ayudar a los meliponicultores a monitorear las condiciones de sus colmenas mediante gráficos y alertas.

## 📂 Estructura del proyecto

El proyecto tiene una estructura modular organizada de la siguiente manera:

- **app/dashboard:** Contiene módulos como "analytics", "beehives", e "history", incluyendo componentes, gráficos y hooks específicos.
- **app/shared:** Contiene componentes compartidos, hooks, layout, y utilidades reutilizables.
- **app/providers:** Proveedores globales como NextUI, Toastify y más.

Para más detalles sobre la estructura de carpetas, consulta el directorio proporcionado en la descripción.

---

## 🚀 Instalación y Configuración

Sigue los pasos a continuación para clonar y ejecutar el proyecto en tu entorno local.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/JorgeAVargasC/bee-key-frontend
```

### 2️⃣ Acceder al directorio del proyecto

```bash
cd bee-key-frontend
```

### 3️⃣ Instalar dependencias

```bash
yarn install
```

### 4️⃣ Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias. Consulta el archivo `.env.template` para conocer los valores requeridos.

```bash
cp .env.template .env
```

Configura tus credenciales de Firebase y otros parámetros según tu entorno.

---

## 🖥️ Ejecutar el proyecto localmente

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
yarn run dev
```

El servidor estará disponible en [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Scripts disponibles

### `yarn run dev`

Inicia el servidor de desarrollo.

### `yarn run build`

Genera una versión optimizada del proyecto para producción.

### `yarn run start`

Inicia el servidor en modo de producción.

### `yarn run lint`

Verifica el código con ESLint para encontrar errores y malas prácticas.

---

## 🧪 Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías principales:

- **React:** Biblioteca principal para construir la interfaz.
- **TypeScript:** Tipado estático para JavaScript.
- **Firebase:** Base de datos en tiempo real para almacenamiento de datos.
- **NextUI:** Librería de componentes UI.
- **Zustand:** Gestión de estado global.
- **Toastify:** Notificaciones elegantes.
- **Chart.js:** Visualización de gráficos interactivos.
- **Styled Components y TailwindCSS:** Estilizado avanzado y utilitario.

---

<details>
  <summary>❤️</summary>
  
  <blockquote>
    <p>
      <small>Finish with love ❤️ what you once started with love 💕</small>
    </p>
    <p>
      <small>Maybe in another universe 🌌✨... it could have worked ✨</small>
    </p>
  </blockquote>
</details>
