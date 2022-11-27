import React from 'react'

export default function FormRow({name, type, value, handleChange}) {
  return (
    <>
      <label htmlFor={name} className='capitalize block font-bold mb-2'>{name} :</label>
      <input type={type} name={name} id={name} value={value} className='mb-6 rounded-md p-2 w-full placeholder:text-sm text-darkblue' placeholder={`Enter your ${name}`} onChange={handleChange}/>
    </>
  )
}
