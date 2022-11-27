import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import contactRouter from './contactRoute.js'

const app = express();
const PORT = process.env.APP_PORT || 5000

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => { res.send("Hello")})
app.use('/api/v1', contactRouter)

function connectDB(url){
    return mongoose.connect(url)
}

async function startApp (){
  try {
    await connectDB(process.env.DB_URI)
    app.listen(PORT, ()=> {
      console.log(`DB connected and app is running on ${PORT}`);
  })
  } catch (error) {
    console.log(error);
  }
}

startApp()

