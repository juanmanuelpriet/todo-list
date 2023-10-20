import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Continer from "./components/Continer";
import Header from './components/Header';
import InputTask from './components/inputTask';
import TaskContent from './components/TaskContent';

function App() {
  let initialTask=JSON.parse(localStorage.getItem("tasks"));
  if(!initialTask){
    initialTask=[];
  }
  const[tasks,setTasks]=useState(initialTask);
  useEffect(()=>{
    if(initialTask){
      localStorage.setItem("tasks",JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks",JSON.stringify([]));
    }
  },[initialTask,tasks]);
  const creartask=(task)=>{
    setTasks([...tasks,task])
  
    }
    const deleteTask=(id)=>{
      const currentTask=tasks.filter((task)=>task.idTask!==id)
      setTasks(currentTask);
    }
  
  return(
    <Continer>
    <Header/> 
    <InputTask creartask={creartask} />  
    <TaskContent tasks={tasks} deleteTask={deleteTask}/> 
    </Continer>);

  
 
  
};

export default App;
