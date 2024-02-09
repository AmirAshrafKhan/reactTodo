import React, { useState } from "react";
import "./App.css";
function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const filteredList = todoList.filter((_, i) => i !== index);
    setTodoList(filteredList);
  };

  return (
    <div className="app">
      <div>
        <h3>My ToDo List</h3>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          ></input>
          <br />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
