import React, { Component } from 'react';
import Questions from './Questions';
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
    return (
      <div className="App">
        <h1>{quiz.title}</h1>
        <Questions questions={quiz.questions} />
      </div>
    );
  }
}

export default App;
