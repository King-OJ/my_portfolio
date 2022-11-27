import mongoose from 'mongoose';
import validator from 'validator';

const contactSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, "Please provide a name"]
  },
  email: {
    type: 'string',
    required: [true, 'Please provide an email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
  },
    unique: [true, 'Please provide a different email']

  },
  message: {
    type: 'string',
    required: [true, 'Please provide a message'],
    minlength: 10
  },
})

export default mongoose.model("Contact", contactSchema)