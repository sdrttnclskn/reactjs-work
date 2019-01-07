import React, { Component } from 'react';
import { TodoList } from './todoList';
import { TodoForm } from './todoForm';
import { Footer } from './inc/footer';
import { Header } from './inc/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myTasks: [
        { text: "Yapılacak ilk işler", status: "passive" },
        { text: "Kitap oku", status: "passive" },
        { text: "Tez araştırması yap", status: "passive" },
        { text: "Hackerrank antreman yap", status: "passive" }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }
  addTask(val) {
    let updateList = this.state.myTasks;
    updateList.push({ text: val, status: "passive" });
    this.setState({ myTasks: updateList });

  }
  doneTask(task_id) {
    task_id = task_id.replace('task_', '');
    let updateList = this.state.myTasks;
    let newStatus = 'active';
    let currentStatus = updateList[task_id].status;
    if (currentStatus === 'active') {
      newStatus = 'passive';
    }
    updateList[task_id].status = newStatus
    this.setState({ myTasks: updateList });

  }

  removeTask(task_id) {
    task_id = task_id.replace('task_', '');
    let updateList = this.state.myTasks;
    updateList.splice(task_id,1);
    this.setState({ myTasks: updateList });

  }

  render() {

    return (
      <div className="content">
        <Header></Header>
        <TodoForm addTask={this.addTask} />
        <TodoList myTasks={this.state.myTasks}
          doneTask={this.doneTask}
          removeTask={this.removeTask} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
