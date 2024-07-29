const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8081;
const JWT_SECRET = 'your_jwt_secret'; // Replace with a secure key

// MongoDB connection

const DB = 'mongodb+srv://kshama:Kshamas%40123%40@cluster0.gkja9da.mongodb.net/'; // Ensure this is correctly formatted
mongoose.connect(DB)
  .then(() => {
    console.log('Database connected..');
  })
  .catch(err => {
    console.log('Error connecting to the database', err);
  });

  const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  module.exports = mongoose.model('User', userSchema);

// Sign-Up Route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ status: 'Failed', message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ status: 'Success', message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ status: 'Failed', message: err.message });
  }
});

// Sign-In Route
app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ status: 'Failed', message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ status: 'Success', token });
  } catch (err) {
    res.status(500).json({ status: 'Failed', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});