const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Simple route

server.get('/products',async(req, res) => {
  try{
  const getProducts = await db.find({});
  res.status(200).json(getProducts);
}catch(err){
  res.status(500).json({ error: 'Failed to retrieve products' });
}
});
// get product by id
// Route to fetch product by ID
server.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to search products
server.get('/search/:searchTerm', async (req, res) => {
  const { searchTerm } = req.params;

  try {
    const products = await db.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }
      ]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// Route to create a payment intent
server.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount should be in the smallest currency unit (e.g., cents for USD)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change this to your desired currency
      payment_method_types: ['card'],
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


const PORT = process.env.PORT || 4500;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

