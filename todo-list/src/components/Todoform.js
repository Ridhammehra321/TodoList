import React, { useState } from "react";

export const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);
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
      <button className="todo-button">Add Task</button>
    </form>
  );
}
 
