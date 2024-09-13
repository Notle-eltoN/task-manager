import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetchTasks();
  }, []);
  
  const fetchTasks = async () => {
    const response = await axios.get('https://<your-backend-url>/tasks/');
    setTasks(response.data);
  };

  return (
    <div>
      <h1>TaskMaster</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.completed ? "Completed" : "Incomplete"}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
