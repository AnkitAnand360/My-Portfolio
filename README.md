# DevSphere - Full Stack MERN Developer Portfolio

Welcome to **DevSphere**, a modern, responsive, and feature-rich developer portfolio website built using the MERN stack
(MongoDB, Express, React, Node.js). This project showcases my professional software development journey, skills, projects,
and provides a direct communication channel through an interactive contact system.

---

## 🚀 Live Demo & Deployments
- **Client (Vite + React):** [https://my-portfolio-five-iota-75.vercel.app](https://my-portfolio-five-iota-75.vercel.app)
- **Server API (Node + Express):** Hosted on Render

---

## ✨ Features

- **Interactive UI:** Smooth transitions, hover scaling, and animation effects powered by **Framer Motion**.
- **Visuals:** Immersive backdrop rendering with a particles canvas effect.
- **Detailed Progress Tracker:** Stats section highlighting coding achievements, DSA problems solved, and project builds.
- **Responsive Navigation:** Accessible navigation bar with structured routes (Home, About, Projects, and Contact sections).
- **Contact Message Pipeline:**
  - Securely logs incoming contact form responses directly to **MongoDB**.
  - Sends real-time email notifications to the site owner using **Nodemailer**.
- **Admin Management API:** Dedicated backend routes to query, view, and delete contact message submissions.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 (bootstrapped with Vite)
- **Styling:** CSS & TailwindCSS utilities
- **Animations:** Framer Motion
- **Icons:** React Icons (FontAwesome & Simple Icons)
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Server Framework:** Express.js
- **Database Engine:** MongoDB with Mongoose object modeling
- **Email Delivery:** Nodemailer (configured with Gmail SMTP transport)
- **CORS Config:** Enabled for local dev servers and Vercel domains

---

## 📂 Project Structure

The project is structured into twin directories for modularity:

```
devsphere/
├── frontend/                 # Vite + React Client
│   ├── public/
│   ├── src/
│   │   ├── assets/           # Profile images and media assets
│   │   ├── components/       # Reusable components (Hero, Navbar, About, Skills, Stats, Contact)
│   │   ├── pages/            # View pages (Home, About, Projects, Admin)
│   │   ├── routes/           # Routing configuration
│   │   ├── App.jsx           # Parent App component
│   │   └── main.jsx          # Entry point
│   ├── vite.config.js
│   └── package.json
│
└── backend/                  # Node.js + Express API
    ├── config/
    │   └── db.js             # Mongoose connection utility
    ├── models/
    │   └── Message.js        # Contact message Mongo DB schema
    ├── routes/
    │   └── contactRoutes.js  # Routes: POST to send message, GET/DELETE for admin
    ├── server.js             # Main server entry script
    └── package.json
```

---

## ⚙️ Setup and Configuration

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd devsphere/frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Set your environment variables in `.env`:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Run in development mode:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd devsphere/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` environment file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_google_app_password
   ```
4. Fire up the development server:
   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/contact` | Submits contact form, stores message in DB, and sends email notification. |
| **GET** | `/api/contact` | Fetches all stored messages sorted in descending order. |
| **DELETE**| `/api/contact/:id` | Deletes a message record by mongoose object ID. |

---

## 🤝 Contributing
Contributions, bug reports, and pull requests are welcome. Feel free to open an issue if you'd like to suggest any improvements.

---

## 📝 License
This project is licensed under the MIT License.
