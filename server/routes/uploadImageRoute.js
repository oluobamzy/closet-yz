const express = require("express");
const multer = require("multer");
const { addImage } = require("../db/Queries/imageUpload");

const router = express.Router(); // Create an Express router

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  },
});

const upload = multer({ storage });

// Define your API endpoint for file upload using the router
router.post('/', upload.single('file'), async (req, res) => {
  try {
    // Extract other form data from the request body
    const { item_name, category, color, purchase_date, description, season, closet_id, last_worn_date, size, brand_name } = req.body;

    // Get the file path or URL where the uploaded file is saved
    const img_src = req.file.path; // This is the file path; you can store the URL if you prefer

    // You can now use the extracted data and img_src to insert into the database or perform other actions
    // For example, you can call your addImage function here
    await addImage({ item_name, category, color, purchase_date, description, season, closet_id, last_worn_date, size, brand_name, img_src });

    // Respond with a success message
    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router; // Export the router
