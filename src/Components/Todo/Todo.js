import React from "react";

import Todo from "./Components/Todo/Todo";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="Todo">
      <span className="Title">ToDo List</span>
      <br />
      <TodoList />
    </div>
  );
};

export default Todo;
