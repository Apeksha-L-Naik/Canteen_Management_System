const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb+srv://apekshanaik:Naik%409483@cluster0.eymdfbj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Menu item schema and model
const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  available: Boolean,
  category: String,
  price: Number, 
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Routes
app.post('/api/menu', upload.single('image'), async (req, res) => {
  try {
    const { name, available, category, price } = req.body;
    const imagePath = req.file.path;
    const menuItem = new MenuItem({ name, image: imagePath, available, category, price });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    console.error("Error saving menu item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put('/api/menu/:id', async (req, res) => {
    try {
      const { available } = req.body;
      const menuItem = await MenuItem.findByIdAndUpdate(
        req.params.id,
        { available },
        { new: true }
      );
      res.json(menuItem);
    } catch (error) {
      console.error('Error updating menu item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.delete('/api/menu/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const menuItem = await MenuItem.findByIdAndDelete(id);
      if (!menuItem) {
        return res.status(404).json({ error: 'Menu item not found' });
      }
      res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
      console.error('Error deleting menu item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
