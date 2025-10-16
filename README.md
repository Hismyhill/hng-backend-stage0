#🧙‍♂️ HNGXIII — Stage 0 Task
#🎯 Task Overview

This is my submission for Backend — Stage 0.
The task was to build a simple RESTful API endpoint (GET /me) that returns my profile information along with a dynamic cat fact fetched from the Cat Facts API
.

##🚀 Features

Dynamic timestamp (current UTC in ISO 8601 format)

Fetches a random cat fact on each request

Graceful error handling if the external API fails

CORS enabled for public access

Uses Node.js + Express + Axios

##📂 Folder Structure
hng-stage0/
│
├── index.js # Main server file
├── package.json # Dependencies & scripts
└── README.md # Project documentation

##⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Hismyhill/hngxiii-backend-stage0.git
cd backend-wizards-stage0

2️⃣ Install dependencies
npm install

3️⃣ Run locally
npm start

The server will start at:
👉 http://localhost:3000/me

##🧩 API Endpoint

GET /me

Response Example:

{
"status": "success",
"user": {
"email": "owolabismaeel@gmail.com",
"name": "Owolabi Ismaeel",
"stack": "Node.js/Express"
},
"timestamp": "2025-10-16T12:34:56.789Z",
"fact": "Cats can rotate their ears 180 degrees."
}

##🔐 Environment Variables

No special environment variables used in this project

##🧠 What I Learned

How to consume and handle data from a third-party API.

How to structure RESTful API responses in a consistent format.

How to manage errors and ensure reliable responses.

Basic best practices for small backend projects.

##🌍 Deployment

This API can be deployed on platforms like:

Railway

Render (❌ forbidden for this cohort)

AWS

PXXL App

Heroku (if available)

##👤 Author

Name: Owolabi Ismaeel
Email: owolabismaeel@gmail.com

Stack: Node.js/Express

##💡 About This Project

Building this simple dynamic endpoint was a great way to refresh my understanding of how backend systems interact with external APIs. I enjoyed learning how to manage real-time data, handle potential network failures gracefully, and maintain clean, consistent response structures.

While the project was small in scope, it reinforced the importance of clean code, proper error handling, and thoughtful documentation — the kind of habits that scale to larger backend systems.

This experience also reminded me how powerful simple APIs can be when built with good practices and clear intent.
