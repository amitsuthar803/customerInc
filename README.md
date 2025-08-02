# 🧾 Customer List App

A simple Customer Relationship Management (CRM) web app built with **React** and **Redux Toolkit**. It allows users to:

- View a list of customers  
- Search customers by name or email  
- Sort customers alphabetically (A–Z)  
- Display loading and error states  

---

## 🚀 Features

- 🔍 Real-time search functionality  
- 🔡 Alphabetical sorting (A–Z)  
- 🌀 Loading spinner during data fetch  
- ⚠️ Graceful error handling  
- 💅 Tailwind CSS styling  
- 🧠 State management using Redux Toolkit  

---

## 🛠 Tech Stack

- React  
- Redux Toolkit  
- React Redux  
- Tailwind CSS  
- React Icons  
- Vite (for faster development)

---

## 📦 Folder Structure

```

src/
│
├── features/
│   └── customers/
│       └── customerSlice.js     # Redux slice for fetching customers
│
├── components/
│   ├── CustomerList.jsx         # Main UI component
│   └── Spinner.jsx              # Loading indicator
|
|
│─── store.js                 # Redux store configuration
│
├── App.jsx
├── main.jsx
└── index.css

````

---

## ⚙️ How to Run This Project

### 🧩 Using Existing Codebase (Vite Setup)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/customer-list-app.git
   cd customer-list-app
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Visit in Browser**

   ```
   http://localhost:5173
   ```

> If you're not using Vite, replace `npm run dev` with `npm start`.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Credits

Built with ❤️ by [amitsuthar](https://github.com/amitsuthar803)

```

---
