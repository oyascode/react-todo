import React, { useState } from 'react'
import './App.css';
import TodoList from "./component/todos/TodoList"
import Modal from './component/utilities/Modal';

function App() {

  const allTodos = [
    {title: "Todo 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 0},
    {title: "Todo 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 1},
    {title: "Todo 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 1},
    {title: "Todo 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 1},
    {title: "Todo 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 0},
    {title: "Todo 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 0},
    {title: "Todo 7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 1},
    {title: "Todo 8", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 2},
    {title: "Todo 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 3},
    {title: "Todo 10", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 0},
    {title: "Todo 11", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 0},
    {title: "Todo 12", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 0}
  ];

  const all = allTodos;
  const done = allTodos.filter(todo => todo.done);
  const pending = allTodos.filter(todo => !todo.done);

  const [todos, setTodos] = useState(allTodos);
  const [currentView, setCurrentView] = useState(all);
  const [showModalPop, setShowModalPop] = useState(false);

  const setView = (view, todos) => {
    setCurrentView(view);
    setTodos(todos);
  }

  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <h1>Todo</h1>
          <button className="btn" type="button" onClick={() => setShowModalPop(true)}>Add Todo</button>
        </div>
      </div>
      { showModalPop && 
      <Modal 
      title="Create Todo"
      actionText="Create"
      closeText="Close"
      close={() => setShowModalPop(false)}>
        <input type="text" className="input"  placeholder="Title" />
        <textarea rows="4
        " className="input"  placeholder="Description" ></textarea>
      </Modal>}
      <div className="todo-btn">
        <button className= {currentView === "all" ? "active" : " "} onClick={() => setView("all", all)}>All</button>
        <button className= {currentView === "done" ? "active" : " "} onClick={() => setView("done", done)}>Done</button>
        <button className= {currentView === "pending" ? "active" : " "} onClick={() => setView("pending", pending)}>Pending</button>
      </div>
      <div className="todoList-container">
        <TodoList group={currentView} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
