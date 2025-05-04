# 🌱 Bio Sphere Monitor Frontend

This project is the frontend for an environmental monitoring system designed to help visualize and track real-time data from multiple stations. It provides charts and alerts for variables like temperature, humidity, rainfall, sun exposure, and air quality.

## 📂 Project Structure

The codebase follows a modular structure organized as follows:

- **app/dashboard:** Contains modules like "analytics", "stations", and "history", including specific components, charts, and hooks.
- **app/shared:** Holds shared components, hooks, layout, and reusable utilities.
- **app/providers:** Global providers such as NextUI, Toastify, and others.

Refer to the directory structure in the project for more details.

---

## 🚀 Installation & Setup

Follow the steps below to clone and run the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/JorgeAVargasC/bio-sphere-frontend
```

### 2️⃣ Navigate to the project directory

```bash
cd bio-sphere-frontend
```

### 3️⃣ Install dependencies

```bash
yarn install
```

### 4️⃣ Configure environment variables

Create a `.env` file at the root of the project and define the necessary environment variables. Refer to `.env.template` for required keys.

```bash
cp .env.template .env
```

Configure your Firebase credentials and any additional environment-specific parameters.

---

## 🖥️ Run the project locally

To start the development server, run:

```bash
yarn run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Available Scripts

| Script           | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `yarn run dev`   | Starts the development server.                        |
| `yarn run build` | Builds the app for production.                        |
| `yarn run start` | Runs the app in production mode.                      |
| `yarn run lint`  | Runs ESLint to detect and fix issues in the codebase. |

---

## 🧪 Technologies Used

This project is built using the following core technologies:

- **React** – UI library
- **TypeScript** – Static typing
- **Firebase** – Real-time database
- **NextUI** – UI component library
- **Zustand** – Global state management
- **Toastify** – Notification system
- **Chart.js** – Data visualization
- **Styled Components & TailwindCSS** – Styling
