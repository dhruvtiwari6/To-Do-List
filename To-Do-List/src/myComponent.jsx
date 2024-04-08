import { useState } from "react";

function Task() {
  let [task, setTask] = useState([]);

  function handleAddTask(e) {
    const taskVal = document.getElementById("taskChosen").value;
    document.getElementById("taskChosen").value = "";
    setTask((t) => [...t, taskVal]);
  }

  function handleRemoveInput(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function handleMoveUp(i) {
   if(i > 0) {
     const updatedTask = [...task];

     //most efficent way
     [updatedTask[i], updatedTask[i - 1]] = [updatedTask[i - 1], updatedTask[i]];



     setTask(updatedTask); 
   }
  }

  
  function handleMovedown(i) {
    if(i < task.length - 1) {
      const updatedTask = [...task];
 
     //  let temp = updatedTask[i];
     //  updatedTask[i] = updatedTask[i-1];
     //  updatedTask[i-1] = temp;
 
      //most efficent way
      [updatedTask[i], updatedTask[i + 1]] = [updatedTask[i + 1], updatedTask[i]];
 
 
 
      setTask(updatedTask); 
    }
   }

  const items = task.map((task, index) => (
    <div key={index} className="mydiv">
      {task}
    
    <div className= "right-div">
      <button className = "btn" onClick={() => handleMoveUp(index)}>☝️</button>
      <button className = "btn" onClick = {() => handleMovedown(index)}>👇</button>
      <button onClick={() => handleRemoveInput(index)} className="btn">Remove</button>
    </div>
    </div>
  ));
  return (
    <>
    <h1>To - Do - List</h1>
      <input type="text" placeholder="Add your Task " id="taskChosen" />
      <button onClick={handleAddTask} className="addTaskBtn">Add Task</button>

      {items}
    </>
  );
}

export default Task;
