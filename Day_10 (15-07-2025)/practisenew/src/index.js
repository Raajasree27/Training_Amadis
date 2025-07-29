import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import useInput  from './App';
// import Form from './App'
import Antd from './components/Antd/Antd'
// import './App.css';
import 'antd/dist/reset.css';  
import Antd2 from './components/Antd/Antd2';
import Antd3 from './components/Antd/Antd3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/* <useInput /> */}
    {/* <Form/> */}
    {/* <Antd/> */}
    {/* <Antd2/> */}
    <Antd3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
