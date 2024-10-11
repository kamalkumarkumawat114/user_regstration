const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoutes);
app.use(errorHandler);

app.listen(PORT);
