const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')


const registerUser = asyncHandler( async (req,res) =>{
  const {name ,email ,password} = req.body

  // res.json({
  //   name,
  //   email
  // })
  const user = await User.create({
    name,
    email,
    password
  });

  if(user) {
    res.status(201).json({
      id :user._id,
      name : user.name,
      email :user.email,
      password :user.password,
    })
  } else{
    res.status(400);
    throw new error ('Error occured')
    console.log('error occured')
  }
})

const authUser = asyncHandler( async (req,res) =>{
  const { email ,password} = req.body

  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))){
    res.json({
      _id : user._id,
      name : user.name,
      email : user.email,
    })
  } else{
    res.status(400);
    throw new Error ("Invalid email or password");
    // console.log('invalid email or password')
  }
})

module.exports = {registerUser ,authUser}