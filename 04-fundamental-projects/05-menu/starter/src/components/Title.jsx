import React from 'react'

export default function Title({text}) {
  return (
    <div className='title'>
      <h2>{text || "Default title"}</h2>
      <div className='underline'></div>
    </div>
  )
}
