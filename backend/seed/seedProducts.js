import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import { seedProducts } from '../controllers/productController.js';

dotenv.config();

const run = async () => {
  try {
    await connectDB();
    const count = await seedProducts();
    console.log(`Seeded ${count} products`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

run();


