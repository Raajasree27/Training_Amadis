import { useState } from "react"; 
function useInput(initialValue = "") { 
  const [value, setValue] = useState(initialValue); 
  const handleChange = (e) => { 
    setValue(e.target.value); 
  }; 
  const reset = () => setValue(initialValue); 
  const clear = () => setValue(""); 
  return {
    value,
    onChange: handleChange, 
    reset,
    clear,
  }; 
} 
// Using the custom hook 
function Form() { 
  const name = useInput(""); 
  const email = useInput(""); 
  const age = useInput("18"); 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log({ 
      name: name.value, 
      email: email.value, 
      age: age.value, 
    }); 
  }; 
  return (
    <form onSubmit={handleSubmit}> 
      <div> 
        <label>Name:</label> 
        <input 
          type="text" 
          value={name.value} 
          onChange={name.onChange} 
          placeholder="Enter your name" 
        />
      </div> 
      <div> 
        <label>Email:</label> 
        <input 
          type="email" 
          value={email.value} 
          onChange={email.onChange} 
          placeholder="Enter your email" 
        />
      </div> 
      <div> 
        <label>Age:</label> 
        <input type="number" value={age.value} onChange={age.onChange} /> 
      </div> 
      <button type="submit">Submit</button> 
      <button 
        type="button" 
        onClick={() => { 
          name.clear(); 
          email.clear(); 
          age.reset(); 
        }}
      > 
        Reset Form 
      </button> 
    </form> 
  ); 
} 
