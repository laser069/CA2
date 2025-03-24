// src/components/TaskForm.jsx
import axios from 'axios';
import React, { useState } from 'react';


function TaskForm() {
    const [task,setTask] = useState("");
    const [title,setTitle] = useState("");
    const [complete,setComplete] = useState(false);
    const [desc,setDesc] = useState("");
    const getcomp  = (e)=>{
        if(e.target.value === "true"){
            setComplete(true)
        }
        else{
            setComplete(false)
        }
    }
    const getval = (e)=>{
        setTask(e.target.value)
    }
    const getde = (e)=>{
        setDesc(e.target.value)
    }
    const gettit = (e)=>{
        setTitle(e.target.value)
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.post("http://localhost:5000/tasks",{title:title,description:task,completed:complete}).then(()=>console.log("success")).catch(e=>console.log(e));

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input onChange={gettit} type="text" /><br/>
            <input onChange={getval} type="text" /><br/>
            <input onChange={getde} type="text" /><br/>
            <select name="" id="" onChange={getcomp}>
                <option value="false">false</option>
                <option value="true">true</option>
            </select>

            <button type='submit'>Submit</button>

            </form>
        </>
    );
}

export default TaskForm;
