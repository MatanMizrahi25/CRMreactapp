# CRM Engineer – Mini Project

This project was created as part of a technical assignment for a CRM Engineer role. It includes:

1. 📦 **Backend API** – Built with Node.js + Express (mock API)
2. 💻 **Frontend** – React app that fetches client data and displays a task list

---

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone https://github.com/MatanMizrahi25/crm-client-api.git
cd crm-client-api
```

### 2. Start the API (server)
```bash
cd API
npm install
node server.js
```

Server will run on: `http://localhost:3001`

---

### 3. Start the React App (client)
In a separate terminal:

```bash
cd client
npm install
npm start
```

App will open at: `http://localhost:3000`

---

## 🧩 Features

- Retrieves client details and list of tasks from the API
- Displays client name and email
- Displays task list with checkboxes to indicate completion (read-only)
- Based on static JSON from mock server

---

## 📁 Project Structure

```
crm-client-api/
│
├── API/                  # Node.js Express API (mock)
│   └── server.js
│
├── client/               # React frontend
│   └── src/App.js
│
└── README.md             # This file
```

---

## 👨‍💻 Author

Made with 💙 by [Matan Mizrahi](https://github.com/MatanMizrahi25)
