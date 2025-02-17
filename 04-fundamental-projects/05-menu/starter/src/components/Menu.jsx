import React from 'react'
import MenuItem from './MenuItem'

export default function Menu({items}    ) {
  return (
      <div className='section-center'>
          {items.map((menuItem) => {
              return <MenuItem key={menuItem.id} {...menuItem} />
          }
          )}
          
      </div>
  )
}
