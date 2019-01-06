import React, { Component } from 'react';
import { TodoList } from './todoList';
import { TodoForm } from './todoForm';
import { Footer } from './inc/footer';
import { Header } from './inc/header';

const myTasks = [
  "Yapılacak ilk işler",
  "Kitap oku",
  "Tez araştırması yap",
  "Hackerrank antreman yap"
];
class App extends Component {

  addTask(val) {
    console.log(myTasks);
    myTasks.push(val);
    console.log(myTasks);

  }
  render() {

    return (
      <div className="content">
        <Header></Header>
        <TodoForm addTask={this.addTask} />
        <TodoList myTasks={myTasks} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
