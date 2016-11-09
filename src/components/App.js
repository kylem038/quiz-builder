import React, { Component } from 'react';
import Question from './Question';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    this.state = {
        quiz: {}
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    const quizUrl = () => `http://localhost:3001/quizzes/1`;
    return fetch(quizUrl())
    .then(result => result.json())
    .then(result => {this.setState({
      quiz: result.quiz,
    });
    })
    .catch(error => console.log(error));
  }

  render() {
    const { quiz } = this.state;
    if (quiz.questions) {
      return (
        <div className="App">
          <h1>{quiz.title}</h1>
          {quiz.questions.map(question => { return (
            <Question
            title={question.title}
            answers={question.answers}
            id={question.id}
            />
            )}
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading quiz</p>
        </div>
      )
    }
  }
}

export default App;
