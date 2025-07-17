import { useState } from "react";

function New(){
    const[btn,setBtn]=useState(false);
    return(
        <div style={{backgroundColor: btn ? "blue" : ""}}>
            <button onClick={()=>setBtn(!btn)}>ClickMe</button>
        </div>
    )
}
export default New;