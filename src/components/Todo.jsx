import React, { useState } from "react";
import TodoImg from "../images/Todo.png";
const Todo = () => {
  const [inputTask, setInputTask] = useState("");
  const [task, setTask] = useState([]);
  const addTodo = () => {
    if (!inputTask) {
      alert("Please add any Task");
    } else {
      setTask([...task, inputTask]);
      setInputTask("");
    }
  };
  const deleteItem = (id)=>{
        const updatedItems = task.filter((elem,ind)=>{
            return ind !== id;
        });
        setTask(updatedItems);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={TodoImg} alt="Todo logo" width="200" height="200" />
          </figure>
          <figcaption>Add Your List Here</figcaption>
          <div className="add-item">
            <input
              type="text"
              placeholder="Add a Task"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <button onClick={addTodo}>+</button>
          </div>
          <div className="showItems">
            {task.map((ele, ind) => {
              return (
                <ul key={ind}>
                  <li>{ele}</li>
                  <li>
                    <button type="submit" onClick={()=>deleteItem(ind)}>X</button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
