import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/client/123')
      .then(res => res.json())
      .then(data => setClient(data))
      .catch(err => console.error("Error fetching client:", err));
  }, []);

  if (!client) return <div>Loading client data...</div>;

  return (
    <div className="App">
      <h1>Client Info</h1>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>

      <h2>Tasks</h2>
      <ul>
        {client.tasks.map(task => (
          <li key={task.taskId}>
            <label>
              <input type="checkbox" checked={task.completed} readOnly />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
