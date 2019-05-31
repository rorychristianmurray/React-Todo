import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        taskName: ""
    }

    handleChanges = event => {
        console.log(event.target.value);
    
        //save on state, message
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      addTask = event => {
          event.preventDefault();
          this.props.addTask(this.state.taskName)
          this.setState({taskName: ""})
      }

    //   clearCompleted = (event) => {
    //       event.preventDefault();
    //       this.setState({
    //           newTask : this.state.tasks.filter(task => task.completed)
    //       })
    //   };

    render() {
        return (
            <div className="form">

            <form onSubmit={this.addTask} className="todo-form">
                <input
                    placeholder="task name"
                    onChange={this.handleChanges}
                    value={this.state.taskName}
                    name="taskName"
                />
         </form>
         <div className="buttons">
            <button className="btn">Add Task</button>
            <button className="btn" onClick={this.props.clearCompleted}>Clear completed</button>
         </div>
            </div>
        );
    }
}


export default TodoForm;
