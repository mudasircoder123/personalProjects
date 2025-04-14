// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user.js');
const authMiddleware = require('./middleware.js'); // Import the JWT middleware
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Initialize Express app
const app = express(); // Move this line to the top
const secretKey = 'aW9vYWE9jwHRy8v07wpG7EkhU5QwLv4Tx9eyN4vEY8qDmpq4Fl6z9Xo8xocXZ8F';

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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
// order schema
const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product', // Assuming a Product model exists, you can adjust this if necessary
  },
  productTitle: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields
const Order = mongoose.model('Order', orderSchema);
// Order Route: POST to create a new order
app.post('/api/orders', async (req, res) => {
  const { productId, productTitle, productPrice, user } = req.body;

  // Validate that all required fields are provided
  if (!productId || !productTitle || !productPrice || !user) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  try {
    // Create a new order document
    const newOrder = new Order({
      productId,
      productTitle,
      productPrice,
      user,
    });

    // Save the order to the database
    await newOrder.save();

    return res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    return res.status(500).json({ error: 'Failed to place the order' });
  }
});
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
app.get('/api/products/:id',  async (req, res) => {
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
app.get('/api/products/search/:query', authMiddleware, async (req, res) => {
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

// registration for a user 
app.post('/api/register',async(req,res) => {
const{name,email,password} = req.body;
let user = await UserModel.findOne({email});
if(user){
res.status(400).json({msg:"User already exists"});
}
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);
 user = new UserModel({name,email,password:hashedPassword});
 await user.save();
 res.json({msg:"User registered successfully"});

});
// login for a user 

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User doesn't exist" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
// Generate JWT token
const token = jwt.sign(
  { userId: user._id, name: user.name },
  secretKey,
  { expiresIn: '1h' }
);
// Send the token in the response body
 res.status(200).json({ msg: "Login successful", token: token })
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Logout route in the Express backend
app.post('/api/logout', (req, res) => {
  console.log('Logout request received');
  
  // Send a success response
  res.status(200).json({ msg: 'Logout successful' });
});

// Start the server and connect to the database
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
