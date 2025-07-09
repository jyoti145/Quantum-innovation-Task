---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jyoti145/Quantum-innovation-Task.git
cd Quantum-innovation-Task
```

---

### 2. Backend Setup

```bash
cd Backend
npm install
```

- Create a `.env` file in the `Backend` folder:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_super_secret_key
  ```
- Start the backend server:
  ```bash
  node server.js
  ```
  The backend runs on [http://localhost:5000](http://localhost:5000).

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```
The frontend runs on [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Usage

- **Register:** Go to `/register` and create a new account.
- **Login:** Go to `/login` and sign in.
- **Dashboard:** After login/register, you are redirected to a protected dashboard.

---

## ⚙️ Environment Variables
 
 `.env` for backend:

 ---

## 📜 Scripts

### Backend

- `npm install` — Install dependencies
- `node server.js` — Start backend server

### Frontend

- `npm install` — Install dependencies
- `npm run dev` — Start Vite dev server

---

## 🔒 Security

- Passwords are hashed using bcrypt before storing in MongoDB.
- JWT is used for authentication; keep your `JWT_SECRET` safe.
- `.env` files are ignored via `.gitignore`.

---

## 📸 Screenshots

### Login Page
![Login](https://github.com/user-attachments/assets/6cf4bc2d-ffd4-4a52-a79a-ee65092d13bf)


### Register Page
![Register](https://github.com/user-attachments/assets/cb3fa90a-eb11-424c-9e86-2d94e07339cc)


### Dashboard
![Dashboard](https://github.com/user-attachments/assets/842f8dd5-6840-4875-a016-d5098e8d58f1)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is for educational purposes.

---

## 👩‍💻 Author

**Jyoti Swami**

[![GitHub](https://img.shields.io/badge/GitHub-jyoti145-181717?style=flat-square&logo=github)](https://github.com/jyoti145)

---

<p align="center">
  <b>⭐️ Star this repo to support the project! ⭐️</b>
</p>
