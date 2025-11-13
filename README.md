🔮 LearnSight — Learn From the World in Real Time (2035 Prototype)

LearnSight is an augmented-vision web application that transforms your camera into an AI-powered learning assistant.
Point your camera at any everyday object, and EchoGlass instantly recognizes it and generates a 5-line micro-lesson, custom-crafted by AI.

No searching. No typing. Just look → learn.

Built for hackathons with a futuristic vision for 2035.

🚀 Features
🔍 Real-Time Object Detection

Powered by COCO-SSD running fully in the browser

Uses your webcam to detect objects every 500ms

Smooth neon bounding boxes and futuristic UI

🤖 AI Micro-Lessons

When an object is detected, EchoGlass generates a short 5-line educational lesson, including:

Simple explanation

One important fact

One surprising fact

Real-world example

Fun curiosity

Powered by DeepSeek AI through your Node.js backend.

🧠 Browser-Only Vision

No external downloads

No HuggingFace dependencies

Works even on restricted networks

100% local inference → FAST & PRIVATE

🎨 Futuristic AR Interface

Neon glow bounding boxes

Glassmorphism lesson card

Smooth animations

“HUD-style” camera frame

🏗️ Tech Stack
Frontend

React + Vite

TailwindCSS

TensorFlow.js

COCO-SSD Object Detection

Custom AR UI components

Backend

Node.js + Express

DeepSeek Chat API

JSON lesson endpoint /lesson

📂 Project Structure
frontend/
  src/
    components/
      LessonCard.jsx
    hooks/
      useObjectDetection.js
    pages/
      CameraFeed.jsx
    App.jsx
  index.css
  main.jsx

backend/
  server.js
  .env
  package.json

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/your-username/EchoGlass.git
cd EchoGlass

🌐 Frontend Setup
cd frontend
npm install
npm install @tensorflow/tfjs @tensorflow-models/coco-ssd
npm run dev


Visit:
👉 http://localhost:5173

🧠 Backend Setup

Inside the backend folder:

npm install


Create a .env file:

DEEPSEEK_API_KEY=your_api_key_here


Run the server:

node server.js


API runs at:
👉 http://localhost:3001

🔥 Usage

Open http://localhost:5173

Allow webcam access

Point your camera at an object

See bounding boxes appear

Instantly receive an AI-generated micro-lesson

Example:

“Cell Phone”
• A device used to communicate wirelessly…
• First invented in…
• Surprising fact: …
• Real-life example…
• Curiosity…

📘 Vision for 2035

EchoGlass models a future where:

AR glasses become mainstream

Knowledge is delivered instantly

AI interprets the world for you

Micro-learning blends with daily life

Imagine walking through a city and learning from everything you see—
that’s EchoGlass.

👥 Team

Developer: Elias Ibaliden and Mustafa-Olcan Soysal

