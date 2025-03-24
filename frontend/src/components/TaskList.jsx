
// src/components/TaskList.jsx
import React, { useEffect } from 'react';
import axios from "axios"
import {useState} from 'react'
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks,setTasks] = useState([]);
    
    const DataFetcher = async ()=>{
        await axios.get("http://localhost:5000/tasks").then(data=>setTasks(data.data))
     
    }
    DataFetcher();

    return (
        <>
           {tasks.map((task)=>(
            <div key={task.key}><TaskItem title={task.title} description={task.description} completed={task.completed}/></div>
           ))}
        </>
    );
}

export default TaskList;
