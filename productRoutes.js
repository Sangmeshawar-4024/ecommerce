// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');

router.get('/vendor/:vendorId', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.vendorId)) {
        return res.status(400).json({ error: 'Invalid vendor ID format' });
      }
    console.log('Vendor ID:', req.params.vendorId);
    const products = await Product.find({ vendorId: req.params.vendorId });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;