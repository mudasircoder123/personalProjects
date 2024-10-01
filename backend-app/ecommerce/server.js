// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express(); // Move this line to the top

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// Product model
const productSchema = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  isNew: { type: Boolean, default: false },
  oldPrice: { type: Number },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model('products', productSchema);

// Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to fetch a product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add this endpoint to your server code
app.get('/api/products/search/:query', async (req, res) => {
  const query = req.params.query;
  console.log(query);
  try {
    // Use regex for case-insensitive search
    const products = await Product.find({
      title: { $regex: query, $options: 'i' } // Matches titles that contain the query
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server and connect to the database
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
