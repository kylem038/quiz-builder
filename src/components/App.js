import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    const questionsUrl = () => `http://localhost:3001/quizzes`;
    return fetch(questionsUrl())
    .then(result => result.json())
    .then(jsonResult => console.log(jsonResult))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>What JavaScript Error Are You?</h1>
      </div>
    );
  }
}

export default App;
