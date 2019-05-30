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
            <div>

            <form onSubmit={this.addTask} className="todo-form">
                <input
                    placeholder="task name"
                    onChange={this.handleChanges}
                    value={this.state.taskName}
                    name="taskName"
                />
         <button>Add Task</button>
    </form>
         <button onClick={this.props.clearCompleted}>Clear completed</button>
            </div>
        );
    }
}


export default TodoForm;
