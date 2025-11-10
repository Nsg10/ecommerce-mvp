Original Prompt

Build the complete project described below exactly as specified. Create the full folder structure, full frontend code, full backend code, documentation, and prompts file. You must generate all artifacts fully, without placeholders.

PROJECT REQUIREMENTS (from the slide)

Build an E-Commerce Website that enables users to:

Explore products

View product details

Manage a shopping cart

The site must include:

A clean, responsive UI

A lightweight backend to handle data operations

Basic state management for cart functionality

Full working integration between frontend and backend

A working sample dataset of products

TECH STACK (must follow exactly)

Frontend

React.js (or Next.js – choose React.js only)

React Router for navigation

Axios for API calls

Backend

Node.js

Express.js

Mongoose/MongoDB Atlas

Database

MongoDB Atlas (include a .env.example file)

ARTIFACTS TO DELIVER (must generate all of these)

1. Technical Architecture Documentation

Create a complete ARCHITECTURE.md including:

System architecture overview

Frontend architecture

Backend architecture

Database schema

API contract documentation

Component interaction diagram (text-based)

Data flow explanation

Deployment notes

2. Codebase

Generate all of these:

Backend (/backend)

server.js

/models/Product.js

/routes/productRoutes.js

/controllers/productController.js

/config/db.js

/seed/seedProducts.js

.env.example

package.json

CORS enabled

MongoDB Atlas connection

Seed route to insert sample product data

Frontend (/frontend)

React (Vite or CRA, choose Vite)

Pages:

Home.jsx – list of products

ProductDetails.jsx – individual product page

Cart.jsx – local state cart

Components:

Navbar.jsx

ProductCard.jsx

Context:

CartContext.jsx

Routing using React Router

Responsive UI styling (simple CSS or Tailwind – choose simple CSS)

API integration using Axios

Cart functionality: add, remove, calculate total

Project Root

README.md (full instructions)

ARCHITECTURE.md

PROMPTS.md

3. Prompts Used

Create a file PROMPTS.md containing:

The exact prompt I pasted into Cursor

Any sub-prompts you generate internally

ADDITIONAL REQUIREMENTS

Do the following automatically:

Generate a clean folder structure.

Provide fully working code (no placeholders).

Include instructions in README to run backend, frontend, and seed the DB.

Ensure frontend uses Vite + React Router + Axios.

Ensure backend uses Express + Mongoose + dotenv.

Create 3 sample products with images via placeholder URLs.

Make UI responsive using simple CSS.

OUTPUT FORMAT REQUIREMENTS

Your output must:

Produce an actionable project structure

Write every file completely

Use codeblocks for each file

Never say “this is an example”—generate the actual production-ready code

Use clean, modern JavaScript

Ensure the entire project runs without modifications

Begin now. Generate the complete project exactly as requested.


Sub-prompts Generated Internally
1) Define sample products:
   - Create 3 realistic product entries with names, descriptions, prices, image URLs (placeholder), categories, and stock flags.
2) Design Mongoose schema:
   - Fields: name, description, price, imageUrl, category, inStock, createdAt.
3) Implement Express routes and controllers:
   - GET /api/products, GET /api/products/:id, GET /api/seed.
4) Set up React Router and pages:
   - Home (list), ProductDetails (single), Cart (state & totals).
5) Implement CartContext with add/remove/clear and total calculation.
6) Create responsive CSS for grid and layout.
7) Centralize Axios base URL with environment override (Vite).
8) Write README and ARCHITECTURE documentation with run steps and deployment notes.


