import React, { Component } from 'react';

class App extends Component  { 
  state = {
    inputValue: "",
    tasks: []
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  buttonSubmit = (e) => {
    this.setState({
      tasks: [this.state.inputValue, ...this.state.tasks],
      inputValue:"",
    });
  };

 
  render(){ 

    return (
      <div>
        <h1>ToDo Task</h1>
        <input placeholder="Enter task..." value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.buttonSubmit}>Add</button>
        <ul>
          {this.state.tasks.map((tasks, index) => (
            <li key={index}>{tasks}</li>
            ))}
        </ul>
      </div>
    )
  }


} 
  
export default App; 