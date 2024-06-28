const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes');
require('dotenv').config();

const app = express();
//app.use(bodyParser.json());
const PORT = process.env.PORT; //|| 3000

app.use(express.json());

//conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.use('/api', foodRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
