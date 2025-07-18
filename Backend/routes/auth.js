const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  const { name, dob, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
         return res.status(400).json(
        { error: 'User already exists' }
    );

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, dob, email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { name, dob, email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
         return res.status(400).json({
         error: 'Invalid credentials'
         });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
        return res.status(400).json({ 
    error: 'Invalid credentials'
 });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { name: user.name, dob: user.dob, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;