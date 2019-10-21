import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 23}

    ]
  }
  render() {
    return (
      <div className="App">
       <h1>Hi im a react app</h1>
       <p>This is really working</p>
       <button>Swith Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} >My hobbies: Hooping </Person>
       <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
