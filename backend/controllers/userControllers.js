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

module.exports = {registerUser}