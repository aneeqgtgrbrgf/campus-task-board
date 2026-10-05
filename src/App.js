import {useState , useEffect } from 'react';
import TaskCard from './taskcard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete React Lab',
      category: 'Programming',
    },
    {
      id:2,
      title:'Study Database',
      category:'Database',
    },
    {
      id:3,
      title:'Prepare Presentation',
      category:'University'
    }, 
  ]);
  const[newTask,setNewTask] =useState(" ");
  useEffect(()=>{
    console.log("Tasks list updated");
    console.log("Total number of Tasks:", tasks.length);
  },[tasks]);
    function addTask(){
      if(newTask.trim() === ""){
        return;
      }
      const task = {
        id: Date.now(),
        title: newTask,
        category : "general"
      };
      setTasks([...tasks,task]);
      setNewTask("");
    }
  return (
    <div className="App">
      <header className="header">
      <h1 >Campus Task Board</h1>
      <p>Stay Organized, Stay Ahead</p>
      </header>
      <div>
      <input
      type="text"
      placeholder="Enter a new Task ..."
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>
        + Add task
      </button>
      </div>
      <div className="task-heading">
        <h2>Your Tasks</h2>
        <span>{tasks.length} Tasks</span>
      </div>
      <div className="tasks">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          category={task.category}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
