import React from 'react';
import TodoItem from "./TodoItem"

const todoList = ({todos, group}) => {
  return (
    
    <div className="todo-list">
      <div className="todo-group">
        <h4>{group}</h4>
      </div>
      {
        todos.map((todo, index) => <TodoItem todo={todo} index={index}/>)
      }
    </div>
    
  )
}

export default todoList
