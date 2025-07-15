import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Sree from './sree';
// import  from './sree'
// import { Company,Car} from './sree'
// import { Practise as Boy } from './Practise';
import App from "./Practise"
// let myElement = React.createElement('h1',{}, 'I do not use JSX!');
// myElement=<h1> I love JSX </h1>
// myElement=<h1> React is {5+5} times better than traditional method</h1>
// myElement= <h1 className="myclass">Hello World</h1>;


// let x=5;
// const element=<h2>{(x)<10?"Hello":"GoodBye"}</h2>
// function User(){
//    let user="Raaja";
//    return(
//       <h1>Hi!{user}</h1>
// )   
// }

// class Cars extends React.Component{
//    render(){
//       return <h1>Welcome to React!</h1>
//    }
// }

// function Cars(){
//  var ele=<h1>Hello </h1>
//  return ele;

// }
const container=document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render( 
   <div>
      <App/>
      {/* <Company/> */}
   
   </div>  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
