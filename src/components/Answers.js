import React from 'react';

const Answers = (props) => {
  const question = props;
  if (question) {
    return (
      <div>
        {question.answers.map((question, key) => { return (
        <ul key={key}>
          <li>{question.title}</li>
        </ul>
        )})}
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading answers</p>
      </div>
    );
  }
};

export default Answers;
