E-commerce MVP (React + Express + MongoDB Atlas)

Overview
This project is a complete E‑Commerce MVP consisting of a React (Vite) frontend and an Express.js backend with MongoDB Atlas. Users can browse products, view product details, and manage a shopping cart (local state). The app includes a working sample dataset (3 products), API integration via Axios, and a clean, responsive UI using simple CSS.

Tech Stack
- Frontend: React (Vite), React Router, Axios, simple CSS
- Backend: Node.js, Express.js, Mongoose, dotenv, CORS
- Database: MongoDB Atlas

Project Structure
- backend/
  - server.js
  - package.json
  - .env.example
  - config/db.js
  - models/Product.js
  - controllers/productController.js
  - routes/productRoutes.js
  - seed/seedProducts.js
- frontend/
  - index.html
  - package.json
  - vite.config.js
  - src/
    - main.jsx
    - App.jsx
    - styles.css
    - api.js
    - context/CartContext.jsx
    - components/
      - Navbar.jsx
      - ProductCard.jsx
    - pages/
      - Home.jsx
      - ProductDetails.jsx
      - Cart.jsx
- ARCHITECTURE.md
- PROMPTS.md

Prerequisites
- Node.js 18+
- A MongoDB Atlas cluster and connection string

Backend Setup
1) Configure environment variables:
   - Copy backend/.env.example to backend/.env and fill in values:
     - MONGODB_URI: your MongoDB Atlas connection string
     - PORT: port for the server (default 5000)
     - CORS_ORIGIN: http://localhost:5173 (Vite default)

2) Install dependencies and run:
   - Open a terminal in the backend directory:
     - npm install
     - npm run dev
   - The API will start on http://localhost:5000 by default.

3) Seed sample products:
   - Option A (script): npm run seed
   - Option B (HTTP route): GET http://localhost:5000/api/seed
   - Both methods clear existing products and insert the 3 sample items.

Frontend Setup
1) Open another terminal in the frontend directory:
   - npm install
   - npm run dev
   - Vite will start the dev server (default http://localhost:5173).

2) Using the app:
   - Visit http://localhost:5173
   - Browse products on Home, click a product for details, add to cart, and view/remove items in the Cart. Totals update automatically. The cart state is local (not persisted).

API Endpoints
- GET /api/products — list all products
- GET /api/products/:id — get product by id
- GET /api/seed — seed the database with sample products (development convenience)

Notes
- Ensure the backend is running and connected to MongoDB Atlas before using the frontend.
- If you change the backend port or host, update frontend/src/api.js BASE_URL accordingly or set VITE_API_BASE in frontend .env.

Scripts
Backend:
- npm run dev — start server with nodemon
- npm start — start server (node)
- npm run seed — seed database with sample products

Frontend:
- npm run dev — start Vite dev server
- npm run build — production build
- npm run preview — preview production build

Deployment
- Backend can be deployed to services like Render, Railway, or Heroku (enable environment variables and allow inbound connections).
- Frontend can be built via npm run build and deployed to static hosts (Netlify, Vercel, S3/CloudFront).
- Set CORS_ORIGIN on the backend to your production frontend URL.
- Update BASE_URL in frontend/src/api.js or use Vite env var VITE_API_BASE for production API URL.

License
MIT


