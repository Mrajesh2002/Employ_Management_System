
const { z } = require('zod')

const inputValidate = z.object({
  username: z.string(),
  password: z.string(),
})

const users=[{username:"hari",password:"Hari@2810",role:"admin"},
  {username:"guest",password:"123456",role:"user"}
]



function IsValidUser(username,password, up){
  const user = users.find(user=> user.username=== username)
  console.log(user)
  if(up){
    return user
  }

  
  if(user.password === password){
return user 
  }
  else{
    return false
  }
}


exports.signin = async (req, res) => {
  const { username, password } = req.body
  try {
    const isValidInput = inputValidate.safeParse({ username, password })
    if (!isValidInput.success) {
      return res.json({
        success: false,
        message: 'Invalid input',
      })
    }
    const user = IsValidUser(username,password)
    if(user){
      return res.status(200).json({
        login:"success",
        role: user.role
      })
    }else{
       return res.status(201).json({
        login:"Invalid Credentials",
        role: "NAN"
      })
    }
  } catch (e) {
    console.log(e.message)
    return res.json({
      success: false,
      message: e.message,
    })
  }
}


exports.signup = async (req, res) => {
  const { username, password } = req.body
  try {
    const isValidInput = inputValidate.safeParse({ username, password })
    if (!isValidInput.success) {
      return res.json({
        success: false,
        message: 'Invalid input',
      })
    }
     const user = IsValidUser(username,password,true)
    if(user){
      return res.status(200).json({
        login:"false",
        message: "User name Already exist"
      })
    }else{
      users.push({
        username,password,role:"user"
      })
       return res.status(201).json({
        login:"success",
        role: "user"
      })
    }
    
  } catch (e) {
    console.log(e.message)
    return res.json({
      success: false,
      message: e.message,
    })
  }
}
