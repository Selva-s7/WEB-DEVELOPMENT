import { useState } from 'react';
import './App.css'

function App() {
 const name='SELVA';
 const bio='AN AIML ENGINEER WHO IS ALSO BUILDING WEBSITE OUT OF HIS CURIOSITY';
 const role='webdev';
 const [value,updateValue]=useState(0);
 const [isValid,toggle]=useState(false);
 console.log("heyy");
 const [isLogged,LogIn]=useState(false);
 const users=[
  {id:1,name:'SELVA',role:'AIML ENGINNER'},
  {id:2,name:'KALAI',role:'ETHICAL HACKER'},
  {id:3,name:'DEVA',role:'FULL STACK'},
  {id:4,name:'SUNDAR',role:'DATA ANALYST'}
 ]
 if(!isLogged)
 {
  return (
    <div>
      <p>PLEASE LOG IN</p>
      <button onClick={()=>{LogIn(!isLogged)}}>LOG IN</button>
    </div>
  )
 }
 else
 {
  
 
  return (
    <div>
      <p>WELCOME BACK</p>
      <div>
     <div>
      <h1>{role}</h1>
      <p>bio:{bio}</p>
      <p>hi i am {name} </p>
      <p>length:{bio.length}</p>
      
     </div>
     <button>CONTACT ME</button>
    </div>
    <div>
      <p>COUNT{value}</p>
      <button onClick={()=>{updateValue(value+1)}}>INCREASE</button>
      <button onClick={()=>{updateValue(value-1)}}>DECREASE</button>
    </div>
    <div>
      {isValid? <p>SO YOU CAN SEE AHH</p>:<p>I AM HIDDEN</p>}
      <button onClick={()=>{toggle(!isValid)}}>toggle</button>
      <button onClick={()=>{updateValue(value+5)}}>ADD 5</button>
      <button onClick={(e)=>{console.log(e.target)}}>LOG STATUS</button>
      <button onClick={()=>{LogIn(!isLogged)}}>LOG OUT </button>
    </div>
    <div>
      {users.map((user)=>(
        <div key={user.id}>
          <p>NAME:{user.name}</p>
          <p>ROLE:{user.role}</p>
        </div>
      ))}
    </div>
    </div>
    
  )
}
}

export default App
