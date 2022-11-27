import React, { useState } from 'react'
import { SectionHeader, FormRow } from '../components'
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import axios from 'axios'


export default function Contact() {

  const [contact, setContact] = useState(
    {
      name: '',
      email: '',
      message: '',
      loading: false
    }
  )

  const [message, setMessage] = useState({
    show: false, 
    error: false,
    text: ''
  })
  

  function handleChange(e){
    const value = e.target.value
    const name = e.target.name
    setContact({...contact,[name]: value})
  }

  async function handleFormSubmit(e){
    e.preventDefault()
    const {name, email,message} = contact

    const showMessage = (show, error, text)=>{
      setMessage({show: show, error: error, text: text})
    }

    const clearMessage = ()=>{
      setTimeout(() =>{
        setMessage({show: false, error: false, text:''})
      }, 4000)
    }

    if(!name || !email || !message){
      showMessage(true, true, "Please fill out all the fields")
      clearMessage()
      return
    }
    try {
      setContact({...contact, loading: true})
      const response = await axios.post('http://localhost:5000/api/v1/contact', contact)
      const {data} = response
      showMessage(true, false, data.msg)
      setContact({...contact, loading: false})
      
    } catch (error) {
      const {msg} = error.response.data
      showMessage(true, true, msg)
      setContact({...contact, loading: false})
    }
    clearMessage()
       
  }


  return (
    <section id="contact">
      <SectionHeader text="Contact Me" />
      <div className="mt-16 flex flex-col w-full md:flex-row md:items-center ">
        <form className='w-full md:w-[50%]' onSubmit={handleFormSubmit}>
       
          <FormRow name="name" type='text' value={contact.name}  handleChange={handleChange}/>
          <FormRow name="email" type='email' value={contact.email} handleChange={handleChange}/>

          <label htmlFor='message' className='mb-2 font-bold capitalize block'>message :</label>

          <textarea name="message" id="message" className='text-darkblue w-full h-24 rounded-md p-2' value={contact.message} onChange={handleChange}></textarea>

          {message.show && <div className={message.error ? "text-center md:text-left text-red mt-6" : "text-green mt-6 text-center md:text-left"}>{message.text}</div>}

          <div className='flex justify-center md:justify-start mt-6'>
            <button type='submit' className='capitalize bg-blue p-2 px-6 rounded-md tracking-widest hover:bg-opacity-70 transition-all duration-200' onSubmit={handleFormSubmit}disabled={contact.loading}>send</button>
          </div>
        </form>

        <div className="space-y-10 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <div>
            <div className="font-bold">Would you rather call me ?</div>
            <a href="tel:+2348063824618" className='mt-3 block tracking-wider underline underline-offset-4 hover:text-blue'>+234 80 6382 4618</a>
          </div>

          <div>
            <div className="font-bold">Or email me directly ?</div>
            <a href="mailto:clementojigs@hotmail.com" className='mt-3 block tracking-wider underline underline-offset-4 hover:text-blue'>clementojigs@hotmail.com</a>
          </div>

          <div className='space-x-8 flex justify-center md:justify-start'>
            <a href="https://twitter.com/Talk2clemzy" target="_blank" rel="noreferrer">
              <BsTwitter className='text-2xl hover:text-purple'/>
            </a>
            <a href="https://github.com/King-OJ" target="_blank" rel="noreferrer">
              <BsGithub className='text-2xl hover:text-purple'/>
            </a>
            <a href="https://www.linkedin.com/in/clement-ojiguo-4912911aa/" target="_blank" rel="noreferrer">
              <BsLinkedin className='text-2xl hover:text-purple'/>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
