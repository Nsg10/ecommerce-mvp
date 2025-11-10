E-commerce MVP Architecture

System Architecture Overview
- Client: React app (Vite) served to the browser. Handles UI, routing, cart state, and API calls via Axios.
- API Server: Express.js app providing REST endpoints for products and a development seed route. CORS enabled.
- Database: MongoDB Atlas accessed with Mongoose. Stores product data.

High-Level Flow
1) User opens the React app and navigates between pages using React Router.
2) Frontend fetches product lists/details from the backend via Axios.
3) Backend queries MongoDB Atlas through Mongoose and returns JSON.
4) Cart state is maintained locally in the frontend context and not persisted.

Frontend Architecture
- Vite + React functional components.
- React Router for navigation:
  - / — Home (product list)
  - /product/:id — Product details
  - /cart — Shopping cart
- Context: CartContext provides cart state and operations across pages.
- Components:
  - Navbar: navigation + cart item count.
  - ProductCard: reusable product card for the list grid.
- API: api.js centralizes Axios base URL and instance.
- Styling: styles.css with responsive grid and layout rules.

Backend Architecture
- Express.js server with:
  - Routes:
    - /api/products — list all products
    - /api/products/:id — get product by id
    - /api/seed — development route to insert sample products
  - Controllers:
    - productController.js: handles business logic for product retrieval and seeding
  - Models:
    - Product.js: Mongoose schema and model for products
  - Config:
    - db.js: database connection logic
- Middleware: CORS, JSON body parsing, basic error handling.

Database Schema
Collection: products
- name: String, required
- description: String, required
- price: Number, required, min 0
- imageUrl: String, required
- category: String, optional
- inStock: Boolean, default true
- createdAt: Date, default now

API Contract
- GET /api/products
  - Response: 200 OK
    [
      {
        "_id": "string",
        "name": "string",
        "description": "string",
        "price": 0,
        "imageUrl": "string",
        "category": "string",
        "inStock": true,
        "createdAt": "ISODate"
      },
      ...
    ]
- GET /api/products/:id
  - Params: id (Mongo ObjectId)
  - Response: 200 OK
    { "_id": "...", "name": "...", "description": "...", "price": 0, ... }
  - Errors: 404 if not found, 400 if invalid id
- GET /api/seed
  - Development helper to clear and insert 3 sample products.
  - Response: 200 OK { insertedCount: 3 }

Component Interaction Diagram (Text)
[Navbar] --uses--> [CartContext] --provides--> cartCount
[Home] --fetch--> [GET /api/products] --data--> [ProductCard x N] --onClick--> [Add To Cart] --dispatch--> [CartContext]
[ProductDetails] --fetch--> [GET /api/products/:id] --onClick--> [Add To Cart] --dispatch--> [CartContext]
[Cart] --uses--> [CartContext] --actions--> removeItem, clearCart --compute--> total

Data Flow
1) Product listing:
   UI (Home) -> Axios -> /api/products -> Controller -> Mongoose -> MongoDB -> Response JSON -> UI shows cards
2) Product details:
   UI (ProductDetails) -> Axios -> /api/products/:id -> Controller -> Mongoose -> MongoDB -> Response JSON -> UI shows detail
3) Cart:
   UI triggers CartContext actions -> local reducer updates cart items -> UI reflects state (no backend persistence)

Deployment Notes
- Backend:
  - Set MONGODB_URI, PORT, CORS_ORIGIN in environment.
  - Expose only necessary routes.
  - Use a production process manager (PM2) or service.
- Frontend:
  - Build with npm run build, deploy dist/ to static hosting.
  - Configure VITE_API_BASE to your production API origin; ensure backend CORS allows it.
- Security:
  - Do not expose secrets in the frontend.
  - Lock down the seed route in production (disable or guard by env).


