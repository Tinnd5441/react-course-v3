import  { useState } from 'react'

export default function Question({ id, title, info, activeId, toggleQuestion }) {
    const isActive = id ===activeId ;

  return (
      <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="question-btn" onClick={() => toggleQuestion(id)}>
                  {isActive ? '-' : '+'}
                </button>
            </header>
         {isActive && <p>{info}</p>}
        </article>
  )
}
