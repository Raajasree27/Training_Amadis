import React, {useState} from "react";
import Message from "./Message";

// function App(){
//   const[count,setCount]=useState(0);
//   const increment=()=> setCount(count+1);
//   return(
//     <div style={{padding:"20px"}}>
//       <h1>React props and state exmaple</h1>
//       <Message number={count}/>
//       <button onClick={increment}> Increment</button>
//     </div>
//   );
// }

// export default App;

// function App(){
//   const[name, setName]=useState("");
//   const clear=()=>setName("");
//   return(
//     <div style={{padding:"20px"}}>
//       <h2> Enter the Name </h2>
//       <Message userName={name}/>
//       <input onChange={(e)=>setName(e.target.value)} placeholder="Enter the Name" ></input>
//       <button onClick={clear}> Clear Button </button>
//     </div>
//   )

// }
// export default App;


// function App(){
//   let[counter, setCounter]=useState(0);
//   return(
//     <div style={{padding:"20px", margin:"30px"}}>
//       <Message counter={counter} />
//       <button style={{marginRight:"10px"}}   onClick={()=>setCounter(counter+1) }>Increment </button>
//       <button style={{marginRight:"10px", display:counter<0?"none":"inline"}} onClick={()=>{setCounter(counter-1)}} >Decrement </button>
//       <button style={{marginRight:"10px"}} onClick={()=>setCounter(0)}>Reset</button>
      
//     </div>
    
// )
// }
export default App

function App(){
  const arr1=[1,2,3,4];
  const res=arr1.map((arr2,index)=>{
    return <li key={index}>{arr2}</li>
  })
  return(
    <div>
      <ul>{res}</ul>
    </div>
  )
}