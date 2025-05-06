require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

