import React from 'react'

export default function SectionHeader({text}) {
  return (
    <div className="my-4 text-center">
      <h3 className="text-2xl md:text-3xl">{text}</h3>
      <div className="mt-2 w-20 h-2 bg-purple mx-auto"></div>
    </div>
  )
}
