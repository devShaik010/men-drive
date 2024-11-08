const express = require('express')

const router = express.Router();
const { body,validationResult } = require('express-validator');
const userModel = require('../Models/user.model')
router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register',
    body('username').trim().isLength({min : 3}),
    body('email').trim().isEmail().isLength({min : 8}),
    body('password').trim().isLength({min:4}),
    async(req,res)=>{

    const error =  validationResult(req);
    if(!error.isEmpty())
    {
        return res.status(400).json({
            errors:error.array(),
            message : "Invalid Data"
        });
    }

    const {username,email,password} =req.body
    const newUser =userModel.create({
        username,
        email,
        password
    })

    console.log(req.body)

    res.send("user registerd")
})
module.exports = router;