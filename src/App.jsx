
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function handleAddTask() {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(''); 
    }
  }

  function handleDeleteTask(index) {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  }

  function handleEditTask(index) {
    setTask(taskList[index]);
  }

  return (
    <>
      <div id="todo">
        <input
          type='text'
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <FontAwesomeIcon
              icon={faPencil}
              className="icon"
              onClick={() => handleEditTask(index)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="icon"
              onClick={() => handleDeleteTask(index)}
            />
            {task}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
