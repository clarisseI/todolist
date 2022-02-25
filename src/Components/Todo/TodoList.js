import React, { useState } from "react";
import "./TodoList.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handlechange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }
  };
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //find index of the element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy array into new variable
    const newTaskList = [...taskList];

    //edit element

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  };
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handlechange(e)}
        placeholder="Enter Task"
      />
      <button className="add-btn" onClick={AddTask}>
        Add Task
      </button>
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                <FaCheckDouble className="CheckDouble" />
              </button>
              {t.value}
              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                <RiDeleteBin6Fill className="Deletebtn" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;
