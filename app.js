import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [tasks, setTasks] = useState(["Learn React", "Build Portfolio"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if(input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">My Portfolio - Todo App</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex gap-2 mb-4">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="New task..." className="flex-1 border p-2 rounded-lg" />
          <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
        <ul>
          {tasks.map((t, i) => <li key={i} className="bg-gray-50 p-2 rounded mt-2">✅ {t}</li>)}
        </ul>
      </div>
      <p className="mt-8 text-gray-500">Portfolio is Working!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);