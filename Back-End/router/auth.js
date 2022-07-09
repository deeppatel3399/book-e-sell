const express = require('express');
const jwttoken = require('jsonwebtoken');

const router = express.Router();

const Customer = require('../models/customerSchema');

router.get('/',(req,res)=>{
    res.send("hello from router home");
});


router.post('/register', async (req,res) => {

    const { firstname , lastname , email , password , confirmpassword} = req.body;
    
    if(!firstname || !lastname || !email || !password || !confirmpassword)
    {
        res.status(422).json({error:"plz enter details to mandatory field"});
    }

    try{

        const customerExist = await Customer.findOne({email:email});

        if(customerExist)
        {
            return  res.status(422).json({error:"customer already registered"});
        }

        const customer = new Customer({firstname , lastname , email , password});

        await customer.save();
          res.status(202).json({message:"registered successfully"})

    }

    catch{(err) => {
       console.log(err);
    }}

});

router.post('/login',async (req,res) => {

    let token;

    const { email , password } = req.body;

    if(!email || !password )
    {
        res.status(400).json({message: "email and password must be required"});
    }
  
    try{

    const validCustomer = await Customer.findOne({email:email});

       if(validCustomer && password==validCustomer.password)
       {
        res.json({message:"customer login successfully"});
        token = await validCustomer.generateAuthToken();
        res.cookie("jwttoken",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly: true
        });
       }
       else{
        res.status(400).json({error:"invalid customer"});
       }
     
    }
    catch{(err)=>{
        console.log(err);
    }
    }
});

module.exports =  router;