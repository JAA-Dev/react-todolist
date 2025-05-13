import React, {useState} from 'react'

const toDoList = () => {

  // const [task, setTask] = useState(["Eat Breakfast", "Take a Shower", "Walk the Dog" ]);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim() != ""){
      setTask(t => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTasks = task.filter((_, i) => i != index);
    setTask(updatedTasks);
  }
  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index < task.length - 1){
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  return (
    <>
      <div className='to-do-list'>
        <h1>ToDo List</h1>
        
        <div>
          <input type="text"
           placeholder='Enter a task....'
           value={newTask}
           onChange={handleInputChange} />
           <button className='add-button'
           onClick={addTask}>Add</button>
        </div>

        <ol>
          {task.map((task, index) => 
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button'
            onClick={() => deleteTask(index)}>Delete</button>
            <button className='move-button'
            onClick={() => moveTaskUp(index)}>Up</button>
            <button className='move-button'
            onClick={() => moveTaskDown(index)}>Down</button>
          </li>
          )}
        </ol>

      </div>
    
    </>
    
  )
}

export default toDoList