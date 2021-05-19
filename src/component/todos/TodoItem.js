import React, { useState } from 'react'
import "../../App.css"

const TodoItem = ({todo, index}) => {

  let itemClass = todo.done ? "todo-item todo-done": "todo-item";

  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription)
  }
  return (
    <div className={itemClass  }> 
      <div className="todo-heading" onClick=      {handleClick}>
        <div className="todo-index">
          #{index}
        </div>
        <div className="todo-title">
          {todo.title}
        </div>
        <div className="todo-priority">
          {todo.priority}
        </div>
      </div>
      {
        showDescription && (
          <div className="todo-description">
            {todo.description}
          </div>
        )
      }
    </div>
  )
}

export default TodoItem
