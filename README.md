# ExamNotes AI 🚀

ExamNotes AI is a full-stack MERN web application that uses advanced AI models to generate structured, exam-oriented notes, revision material, diagrams, charts, and downloadable PDFs instantly.

The platform is designed for students preparing for exams like:
- CBSE
- JEE
- NEET
- College Exams

---

## 🚀 Live Demo
🔗 https://examnotesaiclient-wul6.onrender.com

---

# 📚 Table of Contents

- Features
- Tech Stack
- Current Functionality
- Future Scope
- Project Structure
- Installation & Setup
- Environment Variables

---

# 🌟 Features

## 🧠 AI Notes Generation

Generate structured AI-powered notes based on:
- Topic
- Class / Level
- Exam Type

---

## ⚡ Quick Revision Mode

Get:
- Short notes
- Important formulas
- Key definitions
- Revision summaries

---

## 📊 AI Generated Charts & Diagrams

Using:
- Mermaid.js
- Recharts

Supported Charts:
- Pie Charts
- Bar Charts
- Line Charts
- Flow Diagrams

---

## 📄 PDF Export

Download generated notes and revision summaries as PDFs using PDFKit.

---

## 💳 Credit System & Monetization

Integrated Stripe Payment Gateway for:
- Buying credits
- Managing usage limits
- Premium note generation

---

## 🔐 Secure Authentication

Authentication powered by Firebase Google OAuth.

Features:
- Continue with Google
- JWT-based sessions
- Cookie-based authentication

---

## 📝 Notes History

Users can:
- Save generated notes
- Access previous notes anytime
- Manage study history from dashboard

---

# 🛠️ Tech Stack

## Frontend

- React.js (Vite)
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- React Markdown
- Recharts
- Mermaid.js

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser

---

## AI & Authentication

- Google Gemini API
- Firebase Authentication

---

## Payments

- Stripe Payment Gateway
- Stripe Webhooks



# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/AI-Exam-Notes-Generator.git

cd AI-Exam-Notes-Generator
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

## Create a `.env` file inside the `server` folder

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx

CLIENT_URL=http://localhost:5173
```

---

## Create a `.env` file inside the `client` folder

```env
VITE_FIREBASE_APIKEY=""


```

---

# ▶️ Run the Project

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Future Enhancements

- Multi-language notes support
- AI-generated quizzes & MCQs
- Voice-based learning assistant
- Dark mode
- Collaborative study rooms
- Mobile app version










