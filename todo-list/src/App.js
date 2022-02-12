import React from "react";
import { todotasks } from './data/todotasks';
import TaskList from "./TaskList";


function App() { 
  const [tasks, setTasks] = React.useState(todotasks);
  const [newEntry, setNewEntry] = React.useState("");

  function handleOnChange(e) {
    setNewEntry(e.target.value);
  };

  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      if (newEntry.trim().length) {
        const newTask = [{ taskId: Math.random(), task: newEntry, isFavorite: false  }];
        const list = [...tasks, ...newTask];
        setTasks(list);
      }
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={newEntry}
        onChange={(e) => handleOnChange(e)}
        onKeyPress={(e) => {handleOnKeyPress(e)}}
      />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
