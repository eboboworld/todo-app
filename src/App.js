import React, { Component } from 'react';


function createTask(title) {
  return {
    id: Date.now(),
    title: title,
    done: false,
  };

}
class App extends Component  {  
  state = {
    inputValue: "",
    tasks: [] 
  }

  handleTaskChange = (task, isdone) => {
    const newTasks = this.state.tasks.map(function(t) {
      if (t===task) {
        return {
          ...task, 
          done: isdone
        }
      }
      return t;
    })
    this.setState({
      tasks: newTasks
    });
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
    const {tasks} = this.state;    

    return (
      <div>
        <h1>ToDo Task</h1>
        <h2>Active tasks: {tasks.length}</h2>
        <input placeholder="Enter task..." value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.buttonSubmit}>Add</button>
        <ul >
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              <div>
              <input type="checkbox" checked={task.done} onChange={e => this.handleTaskChange(task, !task.done)}/>
              {task.title}
            </div>
            </li>
            ))}
        </ul>
      </div>
    )
  }


} 
  
export default App; 