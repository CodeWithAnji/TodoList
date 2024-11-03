import React, { useState } from 'react';
import axios from 'axios'


function Create({ addTask }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3002/add', { task: task })
            .then(result => console.log(result))
            .catch(err => console.log(err))


    if (task.trim() === "") {
      alert("Please enter a task!");
    } else {
      addTask(task); // Pass the task to the Home component
      setTask('');   // Clear the input field after adding the task
    }
  };




  return (
    <div className='container'>
      <div>
        <input 
          type='text' 
          id='inp' 
          placeholder='Enter Task' 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <button type='button' onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default Create;