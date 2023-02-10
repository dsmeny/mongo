const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 4000

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server running on port ${port}`))