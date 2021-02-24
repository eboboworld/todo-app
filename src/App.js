import React, { Component } from 'react';

function createTask(title) {
  return {
    id: Date.now(),
    title: title,
  };

}
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
      tasks: [ createTask(this.state.inputValue), ...this.state.tasks ],
      inputValue:"",
    });
  };
  

 
  render(){ 
    const {tasks} = this.state


    return (
      <div>
        <h1>ToDo Task</h1>
        <h2>Active tasks: {tasks.length}</h2>
        <input placeholder="Enter task..." value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.buttonSubmit}>Add</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={task.id}>{task.title}</li>
            ))}
        </ul>
      </div>
    )
  }


} 
  
export default App; 