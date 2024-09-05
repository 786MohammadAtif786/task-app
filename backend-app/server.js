const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
require('dotenv').config();

const app = express();


const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests fro this IP, Please try again in an hour'
});

//Middleware
app.use('/api', limiter);
app.use(helmet());
app.use(cors());
app.use(express.json());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss())


const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Connection error', err);
});
