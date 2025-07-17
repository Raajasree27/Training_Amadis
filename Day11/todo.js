import React,{useState} from "react";
function Todo(){
    const[task, setTask]=useState([]);
    const[newTask,setNewTask]=useState('');
    const handleInput=(e)=>{
        setNewTask(e.target.value)
    }
    const buttonClick=()=>{
        if(newTask==="")return;
        const newTaskId={
                id: Date.now(),
                text:newTask,
                completed:false
            }
        setTask([...task,newTaskId]);
        setNewTask("")
    }

    const handleToggle=(id)=>{
        const updatedTask=task.map((task)=>{
        if(task.id===id){
            return{...task,completed:!task.completed};
        }
        return task;
    });
    setTask(updatedTask);
    }

    const handleDelete=(id)=>{
        const updatedTask = task.filter((tas)=>
            tas.id!==id
        )
        setTask(updatedTask);
    }
    return(
        <div style={{padding:'30px' }}>
            <h1>My To-do List</h1>
            <input placeholder="Enter the items to be added" 
            onChange={handleInput} type="text" value={newTask} />
            <button onClick={buttonClick} style={{margin:'10px'}}> Add Task</button>
            {task.length===0?(<p>No Tasks yet!! Add One.</p>):(
            <ul>
                {task.map((task)=>(
                    <li key={task.id} style={{textDecoration:task.completed?'line-through':'none'}}> {task.text}
                    <button onClick={()=>handleToggle(task.id)} style={{margin:'10px'}}>{task.completed?"undo":"Done"}</button>
                    <button onClick={()=>handleDelete(task.id)} style={{margin:'10px'}}>Delete</button>
                    </li>
                ))}
            </ul>)}

        </div>

    )
}
export default Todo;