const express=require('express');
const route=express.Router();

const Person=require('../model/user.js');

//just fetch info by user name here you can get the _id of user
route.get('/getUserByName',(req,res)=>{
    Person.findOne({name:req.body.name})
      .then(data=>{
          res.status(200).json(data);
      })
      .catch(err=>{
          res.status(400).json({error:'some error occure to fetch data'});
      })
})

//just getuser info by user auto generated id
route.get('/getRecord',(req,res)=>{
    Person.findById({_id:req.body.id})
      .then(data=>{
          res.status(200).json({
              name:data.name,
              email:data.email
          });
      })
      .catch(err=>{
          res.status(400).json({error:'some error occure to fetch data'});
      })
})

//set user
route.post('/setRecord',(req,res)=>{
  
    const newPerson=new Person({
        name:req.body.name,
        email:req.body.email
    })

    newPerson.save()
    .then(item => {
        res.status(200).json({auto_id:item._id});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
})

//some id of save users - 600fe1605bcc06357838f918 , 600fdf343a7b58337ec92ba7

module.exports=route;