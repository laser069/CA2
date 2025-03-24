
import React from 'react'
import "./TaskItem.css"

function TaskItem({title,description,completed}) {

  return (
    <div className="container"> 
      <div>Title:{title}</div>
      <div>Description:{description}</div>
      <div style={{
        backgroundColor:completed?"green":"red"
      }}>{completed?"Completed":"Not Completed"}</div>

    </div>
  )
}

export default TaskItem
