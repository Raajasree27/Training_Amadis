// function Message(props){
//     return (
//         <div>
//             <p>Hi Welcome to React and Hope you have good learning.{props.number}</p>
//         </div>
//     )
// }
// export default Message;

// function Message(prop){
//     const name=prop.userName.trim();
//     return(
//         <div>
//         {name==="" ? (<p>Please Enter a Name</p>):(<p>Hello!{prop.userName}</p>)}
//         </div>
//     )
// }
// export default Message;

function Message(prop)
{
    return(
        <div>
         <h1>Counter={prop.counter}</h1>
        {prop.counter===10?(<p>Celebration Line</p>):(<p></p>)}
        </div>
       
    )
}
export default Message

