
import {useState} from "react";
function Pass(){
    // const[pass,setPass]=useState("")l
    const[show,setShow]=useState(true)
    const handleClk=()=>{
        setShow(!show);
    }
    return(
        <>
        <label>Enter the Password:
        <input type={show?"text":"password"}/></label>
        <button onClick={handleClk}>{show?"hide":"show"}</button>
        </>
    )
}
export default Pass