const jwt = require('jsonwebtoken');
const secretKey = 'aW9vYWE9jwHRy8v07wpG7EkhU5QwLv4Tx9eyN4vEY8qDmpq4Fl6z9Xo8xocXZ8F';

// JWT Authentication Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header (Bearer token)
  
    if (!token) {
      return res.status(401).json({ msg: 'No token provided, authorization denied.' });
    }
  
    try {
      // Verify token
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded; // Attach decoded user data to the request object
      next(); // Continue to the next middleware/route handler
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  };
  
  module.exports = authMiddleware;