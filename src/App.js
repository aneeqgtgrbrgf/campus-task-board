import {useState , useEffect } from 'react';
import TaskCard from './taskcard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'complete react lab',
      category: 'programming',
    },
    {
      id:2,
      title:'study database',
      category:'databse',
    },
    {
      id:3,
      title:'prepare presentation',
      category:'University'
    },
  ]);
  const[newTask,setNewTask] =useState(" ");
  useEffect(()=>{
    console.log("Tasks list updated");
    console.log("Total number of Tasks:", tasks.length);
  },[tasks]);
    function addTask(){
      if(newTask.trim() === " "){
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
      <h1 >Campus Task Board</h1>
      <input
      type="text"
      placeholder="Enter task here"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>
        Add task
      </button>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          category={task.category}
        />
      ))}
    </div>
  );
}

export default App;
