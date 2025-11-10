import mongoose from 'mongoose';
import { Product } from '../models/Product.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product id' });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

const SAMPLE_PRODUCTS = [
  {
    name: 'Modern Wireless Headphones',
    description:
      'Experience immersive sound with noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1518443871257-8d48f1f9f220?q=80&w=1200&auto=format&fit=crop',
    category: 'Audio',
    inStock: true
  },
  {
    name: 'Minimalist Smartwatch',
    description:
      'Track fitness, receive notifications, and monitor health metrics with a sleek, minimalist design.',
    price: 179.0,
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    category: 'Wearables',
    inStock: true
  },
  {
    name: 'Ergonomic Mechanical Keyboard',
    description:
      'Premium mechanical keyboard with tactile switches, ergonomic layout, and customizable RGB lighting.',
    price: 99.5,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Accessories',
    inStock: true
  }
];

export const seedProducts = async () => {
  await Product.deleteMany({});
  const inserted = await Product.insertMany(SAMPLE_PRODUCTS);
  return inserted.length;
};

export const seedProductsHandler = async (req, res, next) => {
  try {
    const count = await seedProducts();
    res.json({ insertedCount: count });
  } catch (err) {
    next(err);
  }
};


