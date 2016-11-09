import React from 'react';
import Answers from './Answers';

const Questions = (props) => {
  const quiz = props;
  if (quiz.questions) {
  return (
    <div>
      {quiz.questions.map(question => { return (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <Answers answers={quiz.questions} />
        </div>
        )}
      )}
    </div>
  )
  } else {
    return (
      <div>
        <p>Loading Questions</p>
      </div>
    )
  }
};

export default Questions;
