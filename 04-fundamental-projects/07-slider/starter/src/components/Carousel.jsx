import { useState } from 'react';
import { shortList, list, longList } from '../data';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


export default function Carousel() {
    const [peoples, setPeoples] = useState(shortList)
    
    const nextPerson = () => {
        setPeoples((oldPeople) => {
            const lastPerson = oldPeople[oldPeople.length - 1]
            return [lastPerson, ...oldPeople.filter((person) => person !== lastPerson)]

        })
    }
    const prevPerson = () => {
        setPeoples((oldPeople) => {
            const [firstPerson, ...people] = oldPeople
            return [...people, firstPerson]
        })
    }
   
    
  return (
      <section className="slider-container"> 
          {
                peoples.map((person)=>{
                    const {id,image,name,title,quote}=person
                    return (
                        <article key={id} className='slide'>
                            <img src={image} alt={name} className='person-img' />
                            <h5 className='name'>{name}</h5>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                            
                        </article>
                    )
                })
          }

            <button className='prev' onClick={prevPerson}>
              <FiChevronLeft />
          </button>
            <button className='next' onClick={nextPerson}>
              <FiChevronRight />
          </button>
    </section>
  )
}
