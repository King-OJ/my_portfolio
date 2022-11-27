import express from 'express';
import contactSchema from './contactModel.js';

const router = express.Router();

router.post('/contact', async function (req, res) {
  const {name, email, message} = req.body

  if(!name || !email || !message) {
    res.status(400).json({msg:'Please fill out all fields'})
    return
  }

  const contactAlreadyExists = await contactSchema.findOne({email})

  if(contactAlreadyExists){
    res.status(200).json({msg: `Thanks, I've been contacted by this email already. I'll get back to you shortly!`})
    return
  }

  try {
    const contact = await contactSchema.create({name, email, message})
    
    res.status(200).json({msg: `Thanks, you'll get a response shortly`})
  } 
  catch (error) {
   
    if(error.name === 'ValidationError'){
      const errs = Object.keys(error.errors)
      if(errs.includes("message")){
        res.status(400).json({msg: `Please provide a more detailed message` })
        return
      }
      const errMsg = errs.map((err, i) => `Please provide a valid ${err}`)
      res.status(400).json({msg: errMsg[0] })
    }
   
  }
})

export default router;
