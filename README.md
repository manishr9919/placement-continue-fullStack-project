# 💰 Financial Time Machine

A personal finance tool that helps users visualize alternate financial futures based on current data, past behavior, and financial goals.

---

## 🚀 Features Implemented (Backend)

✅ **User Authentication (Register & Login)**  
✅ **JWT-based Authorization for Protected Routes**  
✅ **Fetch Logged-in User's Profile**  
✅ **Update User’s Financial Information (Income, Expenses, Goals, etc.)**

---

## 🧰 Tech Stack

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT (Authentication)  
- Bcrypt (Password Hashing)  
- Dotenv (Environment Variables)

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/financial-time-machine.git
cd financial-time-machine/server
npm install
Create a .env file in the root of the server folder with the following:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
Copy
Edit
npm run dev
🧪 API Endpoints
🔐 Auth
POST /api/auth/register → Register a new user

POST /api/auth/login → Login and receive JWT

👤 User
GET /api/user/profile → Get logged-in user’s profile

PATCH /api/user/update → Update financial info (Protected)

🗃️ Sample MongoDB User Schema
json
Copy
Edit
{
  "name": "Manish Rauniyar",
  "email": "manish@example.com",
  "password": "<hashed>",
  "income": 50000,
  "expenses": 30000,
  "savings": 100000,
  "investments": 0,
  "goals": ["buy bike in 1 year", "buy house in 5 years"]
}
📌 Upcoming Features (To-Do)
📊 Visualize financial forecasts

🔄 What-if scenarios for career, investment, and spending changes

🤖 AI-powered suggestions based on user behavior and goals

🔒 Full privacy-focused system (no data selling)

📉 Backward analysis for past decision impact

