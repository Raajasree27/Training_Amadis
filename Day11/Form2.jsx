import { useState } from "react";

function Form2(){
    const[inputs,setInput]=useState({});
    const[userName,setUserName]=useState("");
    const[age,setAge]=useState("");
    const handleClk=(e)=>{
        e.preventDefault();
        alert(`UserName ${userName},Age ${age}`)
    }
    return(
        <form onSubmit={handleClk}>
            <label>
                Enter your Name:
                <input 
                type="text"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}/>
            </label>
            <label>
                Enter your Age:
                <input 
                type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)}/>
            </label>
            <input type="Submit"/>
        </form>
    )
}
export default Form2