import React, { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    this.state = {
        quizzes: [],
        questions: [],
    };
  }

  componentDidMount() {
    this.retrieveQuestions();
  }

  retrieveQuestions() {
    const questionsUrl = () => `http://localhost:3001/quizzes`;
    return fetch(questionsUrl())
    .then(result => result.json())
    .then(result => {this.setState({
      quizzes: result.quizzes,
      questions: result.quizzes[0].questions,
    });
      console.log(result);
    })
    .catch(error => console.log(error));
  }

  render() {
    // let quiz = jsonResult.forEach((question) => { <h3>{quiz.question.title}</h3> })
    return (
      <div className="App">
        {this.state.quizzes.map(quiz => { return (
            <div key={quiz.id}>
              <h1>{quiz.title}</h1>
            </div>
          )}
        )}
        {this.state.questions.map(question => { return (
          <div key={question.id}>
            <h3>{question.title}</h3>
            {question.answers.map((question, key) => { return (
              <ul key={key}>
                <li>{question.title}</li>
              </ul>
            )})}
          </div>
          )}
        )}
      </div>
    );
  }
}

export default App;
