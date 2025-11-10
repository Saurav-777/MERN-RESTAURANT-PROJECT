# 🍽️ MERN Restaurant Reservation System

A **modern full-stack web application** built using the **MERN stack (MongoDB, Express, React, Node.js)** that allows users to easily **reserve tables online**, ensuring a smooth and hassle-free dining experience.  

---

## 🌐 Live Demo
> 🔗 Coming soon (after deployment)

---

## 🧠 Project Overview

This project provides a **complete restaurant reservation system**, designed for both restaurant owners and customers.  

Users can:
- Browse the restaurant website
- Fill out a reservation form  
- Book tables in real-time  
- Get quick confirmation and feedback  

Admins (restaurant owners) can:
- View reservations in MongoDB  
- Manage and maintain records  

The platform offers a responsive, user-friendly interface with efficient backend management and a secure database connection.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js (Vite) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Auth (Email/Password) |
| **Styling** | CSS, Bootstrap |
| **Icons & UI** | React Icons, Toast Notifications |
| **Deployment (optional)** | Render / Vercel / Netlify |



---

## 📁 Folder Structure
MERN-RESTAURANT-PROJECT/
│
├── backend/
│ ├── config.env
│ ├── server.js
│ ├── app.js
│ ├── database/
│ ├── routes/
│ ├── controller/
│ ├── models/
│ └── middlewares/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── firebase.js
│ │ ├── restApi.json
│ │ ├── App.jsx
│ │ └── index.css
│ ├── package.json
│
├── .gitignore
├── package.json
└── README.md

yaml
Copy code

---

## 🚀 Installation and Setup Guide

### 🪜 Step 1 — Clone the Repository
```bash
git clone https://github.com/Saurav-777/MERN-RESTAURANT-PROJECT.git
cd MERN-RESTAURANT-PROJECT
🪜 Step 2 — Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside the backend folder and add:

ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecretkey
FRONTEND_URL=http://localhost:5173
Start the backend server:

bash
Copy code
npm run dev
✅ You should see:

pgsql
Copy code
SERVER HAS STARTED AT PORT 5000
Connected to database!
🪜 Step 3 — Frontend Setup
bash
Copy code
cd ../frontend
npm install
npm run dev
The React app will run at:

🔗 http://localhost:5173/

🪜 Step 4 — Firebase Authentication Setup
Go to Firebase Console

Create a new project

Enable Email/Password Authentication

Copy your Firebase config and paste it into frontend/src/firebase.js

js
Copy code
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
💡 Key Features
✅ Responsive UI – Works perfectly across all screen sizes
✅ Online Table Reservation – Book a table with just a few clicks
✅ Firebase Authentication – Secure login and signup
✅ Real-time Data Storage – All reservations are stored in MongoDB Atlas
✅ Fast Backend with Express.js – Efficient routing and APIs
✅ Toast Notifications – Instant feedback for user actions
✅ Modern Design – Clean, minimal, and user-friendly interface

🧩 API Endpoints
Method	Endpoint	Description
POST	/api/v1/reservation	Create a new table reservation
GET	/	Test backend API

🧠 How It Works
The user visits the website and navigates to the Reservation Form.

On form submission, data is validated and sent to the backend API.

The Express.js server processes the request and stores it in MongoDB.

The user gets instant feedback and confirmation through toast messages.

Admin can view all stored reservations in MongoDB Atlas dashboard.

📸 Screenshots (Add after deployment)
Home Page	Reservation Form	Dashboard
Home Page	Reservation Form	Dashboard

🧰 Future Enhancements
🔹 Admin Panel for managing reservations
🔹 Email/SMS confirmation system
🔹 Payment integration for event bookings
🔹 Multi-restaurant management system
🔹 Dark/Light mode toggle

👨‍💻 Developed By
Saurav Kumar
📍 Chandigarh University
💼 MERN Stack Developer | Passionate about Full-Stack Web Development

📜 License
This project is licensed under the MIT License.
You are free to use and modify it for educational or personal projects.

⭐ Show Your Support
If you like this project, give it a ⭐ on GitHub — it motivates me to build more open-source projects like this.

