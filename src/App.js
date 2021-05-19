import React, { useState } from 'react'
import './App.css';
import TodoList from "./component/todos/TodoList"

function App() {

  const allTodos = [
    {title: "Todo 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 0},
    {title: "Todo 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 1},
    {title: "Todo 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 1},
    {title: "Todo 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 1},
    {title: "Todo 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: false, priority: 0},
    {title: "Todo 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aliquam harum facilis ratione numquam officia quia iste enim aperiam quisquam!", done: true, priority: 0}
  ];

  const all = allTodos;
  const done = allTodos.filter(todo => todo.done);
  const pending = allTodos.filter(todo => !todo.done);

  const [todos, setTodos] = useState(allTodos);

  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <h1>Skill Up Todo</h1>
        </div>
      </div>
      <div className="todo-btn">
        <button className="btn active" onClick={() => setTodos(all)}>All</button>
        <button className="btn" onClick={() => setTodos(done)}>Done</button>
        <button className="btn" onClick={() => setTodos(pending)}>Pending</button>
      </div>
      <div className="todoList-container">
        <TodoList group="All task" todos={todos}/>
      </div>
    </div>
  );
}

export default App;
