const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/products'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
