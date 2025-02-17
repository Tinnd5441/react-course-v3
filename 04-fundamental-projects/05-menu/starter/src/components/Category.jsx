import React from 'react'

export default function Category({categories, filterItems}) {
  return (
      <div className='btn-container'>{categories.map((item) => {    
            return <button key={item} className='btn' type='button' onClick={()=>filterItems(item)}>{item}</button>
      })}</div>
  )
}
