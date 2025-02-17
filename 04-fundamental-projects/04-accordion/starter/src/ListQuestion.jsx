import React from 'react'
import Question from './Question';

export default function ListQuestion({ questions, activeId, toggleQuestion }) {
  return (
      <section className="container">
          <h1>Questions</h1>
        {questions.map((question) => {
          const { id, title, info } = question;
          return <Question key={id} id={id} title={title} info={info} activeId={activeId} toggleQuestion={toggleQuestion} />;
        })}
        </section>
  )
}
