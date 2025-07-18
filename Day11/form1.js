import { useState, useEffect} from "react";

function Form1(){
    const[name, setName]=useState("");
    useEffect(()=>{
        console.log("Name Changes:",name);
    },[name])
    const handleClk=(e)=>{
        e.preventDefault();
        alert(`The name you have entered is ${name}`)
    }
    return(
        <form onSubmit={handleClk}>
            <label>
                Enter Your name:
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value) } />
            </label>
            <input type="submit" />
        </form>
    )
   
}
export default Form1