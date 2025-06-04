# Bharat AI - Gemini Chat UI

A simple AI chatbot built with **React** that uses **Google's Gemini API** to generate intelligent responses. Styled to look and behave like **ChatGPT**, it supports a real-time chat interface with typewriter effects.

---

## ✨ Features

- Ask any question to the Gemini AI model
- Chat-style UI with message history (User ↔️ AI)
- Typing effect (typewriter animation)
- Auto-growing textarea input
- Press `Enter` to send, `Shift+Enter` for newline
- Responsive and clean design

---

## 🖼 Demo

--
![postman](https://github.com/user-attachments/assets/f1ef6f4e-2fac-4036-906c-672e5ba72e1b)

![Screenshot](./public/screenshot.png)  
*(You can add your actual screenshot here)*

---

## 🚀 Technologies Used

- ⚛️ React
- 💬 Google Gemini Pro API (Flash model)
- 🖌 CSS3 (custom styling)
- 📦 Axios (for API requests)
- 🎞 `react-simple-typewriter` (for typing effect)

---

## 📦 Installation

```bash
git clone https://github.com/lakshrajkumar26/bharatAi.git
cd bharatAi
npm install
npm start



## 🔑 API Key Setup & API Integration

Go to Google AI Studio
Get your API Key

We use **Axios** to send a POST request to the Gemini API endpoint:

```js
const response = await axios({
  url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY",
  method: "post",
  data: {
    contents: [
      {
        parts: [
          { text: question }
        ]
      }
    ]
  }
});


## 📁 Folder Structure

bharatAi/
├── public/
│   └── index.html
├── src/
│   ├── Aichat.jsx         # Main AI chat component
│   ├── Aichat.css         # Styling
│   └── App.js
├── package.json
└── README.md


## 🧠 Credits
Gemini API

React Simple Typewriter

Inspired by ChatGPT & Bard UI


