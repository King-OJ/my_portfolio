import React from 'react'

export default function Work({img, title, desc, live_link, code_link}) {
  return (
    <div className='group relative border-2 border-purple rounded-md p-2 overflow-hidden'>

        <div className='h-72 rounded-md overflow-hidden'>
          <img src={img} alt="" className='w-full h-full' />
        </div>
        
        <div className="my-4">
          <h4 className='text-xl capitalize text-center'>{title}</h4>
          <div className="mt-4 flex justify-between font-semibold">
            <a href={live_link} target="blank" className="underline text-blue underline-offset-4" rel="noreferrer">View Live Link</a>
            <a href={code_link} target="blank" className="underline text-blue underline-offset-4" rel="noreferrer">View Code</a>
          </div>
        </div>

        <div className="mt-2 h-72 rounded-t-md flex items-center text-center bg-blueishgray absolute top-[100%] left-0 right-0 overflow-hidden group-hover:top-0 transition-all ease duration-700">
          <p className='p-1'>{desc}</p>
        </div>

      </div>
  )
}
