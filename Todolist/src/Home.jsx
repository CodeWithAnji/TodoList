import React, { useState, useEffect } from 'react';
import Create from './Create';

function Home() {
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='home'>
      <h1>Todo List</h1>
      <Create addTask={addTask} />
      {
        todos.length === 0 
        ? 
        <div><h3>No Records</h3></div> 
        : 
        todos.map((todo, index) => (
          <div className='todo-item' key={index}>
            {todo}
            <i className="delete-icon" onClick={() => deleteTask(index)}>🗑</i>
          </div>
        ))
      }
    </div>
  );
}

export default Home;
