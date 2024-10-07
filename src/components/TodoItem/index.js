import React from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo}) => {
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
