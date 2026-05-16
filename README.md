🚀  AI Exam Notes Generator

ExamNotes AI is a full-stack MERN web application that uses advanced AI models to generate structured, exam-oriented notes, revision material, diagrams, charts, and downloadable PDFs instantly.
The platform is designed for students preparing for exams like CBSE, JEE, NEET, College Exams, and project documentation.

The project leverages technologies like React.js, Redux Toolkit, Node.js, MongoDB, Google Gemini API, Firebase Authentication, and Stripe Payments to provide a modern AI-powered learning experience.

📚 Table of Contents
Features
Tech Stack
Current Functionality
Future Scope
Project Screenshots
How to Run
Environment Variables
Contributors
License
🌟 Features
🧠 AI Notes Generation

Generate high-quality structured notes using Google Gemini AI based on:

Topic
Class / Level
Exam Type
Revision Mode
⚡ Quick Revision Mode

Get concise revision-ready content including:

Important formulas
Key definitions
Bullet-point summaries
Last-minute revision notes
📊 AI-Generated Charts & Diagrams

Automatically generate:

Flow diagrams
Block diagrams
Pie charts
Bar charts
Graphs

Using:

Mermaid.js
Recharts
📄 PDF Export

Download generated notes and revision summaries as clean PDFs.

💳 Credits & Monetization

Integrated Stripe Payment Gateway:

Free starter credits
Buy additional credits
Credit-based AI usage system
🔐 Secure Authentication

Authentication powered by:

Firebase Google OAuth
JWT Authentication
Cookie-based sessions
📝 Notes History

Users can:

Save generated notes
Revisit previous notes
Access notes anytime
🛠️ Tech Stack
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Cookie Parser
Stripe Webhooks
Frontend
React.js (Vite)
Redux Toolkit
Tailwind CSS
Framer Motion
React Markdown
Recharts
Mermaid.js
AI & Authentication
Google Gemini API
Firebase Authentication
✅ Current Functionality
👤 User Authentication
Continue with Google Login
Secure authentication using Firebase
Persistent sessions with JWT
🧠 AI Note Generation

Users can:

Enter topic name
Select class/level
Choose exam type
Generate AI-powered notes instantly
⚡ Revision Mode

Special revision-focused AI output for:

Short notes
Formulas
Quick study material
📊 Diagram & Chart Generation

Generate educational diagrams and charts dynamically inside notes.

📄 PDF Downloads

Users can export generated notes as PDFs.

💳 Credits System
Free credits for new users
Credit deduction per generation
Stripe-based recharge system
📝 Notes Dashboard

Users can:

View previous notes
Access saved content
Continue learning later
🚀 Future Scope
🌍 Multi-language Support

Generate notes in:

Hindi
English
Regional languages
🎯 AI Quiz Generation

Automatic:

MCQs
Practice questions
Mock tests
🎤 Voice Assistant

AI-based voice learning assistant for interactive study.

🌙 Dark Mode

Enhanced UI with dark/light themes.

📱 Mobile Application

Dedicated Android & iOS applications.


Features:

Topic input
Class/Level selection
Exam type selection
Revision mode toggle
Diagram and chart options
📂 Project Structure

⚙️ How to Run
1️⃣ Clone Repository
git clone https://github.com/your-username/ExamNotes-AI.git
cd ExamNotes-AI
2️⃣ Install Dependencies
Frontend
cd client
npm install
Backend
cd server
npm install
3️⃣ Setup Environment Variables

Create a .env file inside the server folder.

PORT=8000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
CLIENT_URL=http://localhost:5173

Create a .env file inside the client folder.
VITE_FIREBASE_APIKEY = " "
▶️ Start the Application
Backend
cd server
npm run dev
Frontend
cd client
npm run dev
