# 💰 Financial Time Machine

A full-stack personal finance tool that helps users visualize alternate financial futures based on their real data, behavior, and goals.

---

## 🧠 What is This?

A smart financial planner that allows users to:

- Input and update their income, expenses, savings, and goals
- Track financial behavior over time
- Simulate **"What if"** scenarios (e.g., career change, investment choices)
- Get personalized AI-driven financial advice
- Maintain full control of data — privacy first

---

## 🚀 Features (Backend Implemented So Far)

- ✅ User Registration with hashed password using bcrypt
- ✅ Login system with JWT authentication
- ✅ Secure routes with custom auth middleware
- ✅ Fetch user profile (protected route)
- ✅ Update financial data: income, expenses, savings, investments, and goals
- ⏳ More features (AI advisor, analytics, scenario simulation) coming soon...

---

## 🧰 Tech Stack

| Area       | Tech Used                        |
|------------|----------------------------------|
| Backend    | Node.js, Express.js              |
| Database   | MongoDB with Mongoose            |
| Auth       | JWT, bcrypt                      |
| Env Config | dotenv                           |
| Dev Tools  | Nodemon, Thunder Client / Postman|

---

## 📦 Installation Guide

### 1. Clone the repo

```bash
git clone https://github.com/your-username/financial-time-machine.git
cd financial-time-machine/server
2. Install Dependencies
bash
Copy
Edit
npm install
3. Environment Variables
Create a .env file inside the /server folder:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_connection
JWT_SECRET=your_super_secret_key
4. Start the Server
bash
Copy
Edit
npm run dev
Server will run at http://localhost:5000

📡 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & get JWT token
👤 User Routes
Method	Endpoint	Description
GET	/api/user/profile	Get user profile (protected)
PATCH	/api/user/update	Update financial data (protected)
🔐 All /user routes require a Bearer token in the headers.

🗃️ Sample MongoDB User Document
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
🧪 Sample API Test (PATCH /api/user/update)
Headers:

pgsql
Copy
Edit
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
Body:

json
Copy
Edit
{
  "income": 60000,
  "expenses": 35000,
  "investments": 5000,
  "goals": ["buy a car", "travel to Japan"]
}
🔮 Upcoming Features
📈 Financial forecast & chart dashboard

🤖 AI-powered budget suggestions

📊 What-if simulators for job changes/investments

🔒 Full data privacy controls

⏪ Backward analysis of past financial decisions

📸 Screenshots (Coming Soon...)
<!-- You can later add UI screenshots or API response examples here -->
🤝 Contributing
Want to contribute or improve the app? Fork it, make changes, and raise a PR.

bash
Copy
Edit
git clone https://github.com/your-username/financial-time-machine.git
git checkout -b feature/your-feature
npm run dev
👤 Author
Manish Rauniyar
💼 MERN Stack Developer
🔗 GitHub | ✉️ manish@example.com

⭐ Star this repo if you like the project!
yaml
Copy
Edit

---

### 🔧 Pro Tip:

When you finish the frontend, I can help you extend this README with:
- Live demo link
- Deployment guide
- Frontend setup

Just ping me anytime: `add frontend setup to README` 😎

Ready to commit this? Or want help pushing this to GitHub too?











Search

Reason



ChatGPT can make mistak
