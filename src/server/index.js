// src/server/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../../server/models/User.js';
import { useNavigate } from 'react-router-dom';


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://hvac2go.onrender.com']
}));

app.get('/api/customers', async (req,res) => {
  const response = await User.find()
  if(response){
    res.status(200).json(response)
  }
  console.log('current customers')
})

app.post('/api/customers', async (req,res) => {
  try{
    console.log(req.body)

    const newCustomer = await new User({
      name:req.body.name,
      email:req.body.email,
      phoneNumber: req.body.phoneNumber

    });
    const savedCustomer = await newCustomer.save();
    if(savedCustomer){
        console.log('customer added')
    }
}
catch(err){
    console.log(err)
}
})


// const { MONGO_CONNECTION_STRING } = process.env;

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "dist" directory at the root of the project
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/HVAC2GO', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected successfully to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});
