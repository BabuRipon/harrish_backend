const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');

//for fetching env variable
require('dotenv').config()

//mongodb url
const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@course1.wuscb.mongodb.net/harish?retryWrites=true&w=majority`

//mongodb connection
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(data=>{
      console.log('MONGODB CONNECTED...');
  })
  .catch((err=>{
      console.log(err);
  }))


app.use(express.json());//this is for fetching data from body part of req object.
app.use(cors());//this is for cross-origin-resources

const user=require('./routes/user.js');

app.use('/user',user); //this is actual api call . this is middleware


app.listen(3000,()=>console.log('app running on port 3000...'))