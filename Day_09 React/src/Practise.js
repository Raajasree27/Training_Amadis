// function Practise()
// {
//     return (
//         <div>
//             <h6> hello6 </h6>
//         </div>
//     )
// }

import { useState } from "react";

// export {Practise};


function App(){
    const [subscribe,setSubscribe]=useState("Please Subscribe");
    return(
        <div>
            <p>{subscribe}</p>
        {/* {subscribe ?  */}
            {/* // <p>Thanks for Subscribing</p>:<button onClick={()=>setSubscribe(true) } style={{color:"white", background:"red", border:"none",borderRadius:"5px"}}>Subscribe</button>} */}
            <button onClick={()=>setSubscribe("Thankyou for subscribing")}>
                Subscribe
            </button>
        </div>
    );
}
export default App;