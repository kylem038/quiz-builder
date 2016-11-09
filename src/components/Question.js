import React from 'react';
import Answer from './Answer';

const Question = (props) => {
  const { title, answers, id } = props;
  return (
    <div key={id}>
      <h3>{title}</h3>
      {answers.map((answer, id) => { return (
        <Answer title={answer.title} score={answer.score} id={answer.index} />
      )})}
    </div>
  )
};



export default Question;
