import React, { useState } from "react";

export const EditTodoform = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        className="todo-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}/>
      <button className="todo-button">Update Task</button>
    </form>
  );
}
 
