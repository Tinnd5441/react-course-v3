import React, { useState } from 'react'
import Title from './components/Title'
import Menu from './components/Menu'
import data from './data'
import Category from './components/Category'


// const tempCategory = data.map((item) => item.category)
// console.log(tempCategory)
// const itemSet = new Set(tempCategory)
// console.log(itemSet)

const tempCategory = ['all', ...new Set(data.map((item) => item.category))] 


export default function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(tempCategory)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <Title text='our menu' />
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>  
    </main>
  )
}
