import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Card from './Usercard';
function App() {
 const name='SELVA';
 const bio='AN AIML ENGINEER WHO IS ALSO BUILDING WEBSITE OUT OF HIS CURIOSITY';
 const role='webdev';
 const [value,updateValue]=useState(0);
 const [isValid,toggle]=useState(false);
 console.log("check")
 const [isLogged,LogIn]=useState(false);
 const [city,dispCity]=useState("");
 const [form,updateForm]=useState({name:"",email:"",password:""});
 const [error,setError]=useState(""); 
const [gituser,setGitHubUser]=useState(null);
 const users=[
  {id:1,name:'SELVA',role:'AIML ENGINNER'},
  {id:2,name:'KALAI',role:'ETHICAL HACKER'},
  {id:3,name:'DEVA',role:'FULL STACK'},
  {id:4,name:'SUNDAR',role:'DATA ANALYST'}
 ]
 useEffect(()=>{console.log("counter changed to value",value)},[value])
 useEffect(()=>
  {const interval=setInterval(()=>{console.log("tick")},2000);
 return ()=>{clearInterval(interval)};
  }
 ,[]);
 useEffect(()=>{
  const fetchUser= async()=>
    {
      try
      {

        const res= await fetch("https://api.github.com/users/selva-s7");
        if(!res.ok)
        {
            if(res.ok===429)
            {
              throw new Error("too many requests try again later");
            }
            else
            {
              throw new Error("please enter a new name");
            }
        }
        else
        {
          const data= await res.json();
          setGitHubUser(data);
        }
      }
      catch(e)
      {
        <p>{e.message}</p>
      }
    }
    fetchUser();
 },[])
 const handleSubmit=(e)=>{e.preventDefault();
  if(form.name.trim()==="")
  {
    setError("NAME FIELD IS REQUIRED");
    return;
  }
  if(!form.email.includes("@"))
  {
    setError("EMAIL SHOULD HAVE @");
    return;
  }
  if(form.password.length<6)
  {
    setError("password should atleast be length of 6");
    return;
  }
  setError("")

 }
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
        {gituser && <div>
            <p>Name:{gituser.name}</p>
            <img src={gituser.avatar_url} alt="not found" />
          </div>}
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
      {users.map((user)=>{
         return <Card key={user.id} name={user.name} role={user.role}/> // There is hard rule in JSX custom component must start with caps so that it can differentiate between inbuilt- tags and custom compenonents
      })}
      </div>

    <div>
      <input type="text" value={city} onChange={e=>{dispCity(e.target.value)}}/>
      <p>YOU ARE IN CITY:{city}</p>
    </div>

    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="Name:">Name:</label>
        <input type="text"  id='Name' value={form.name} onChange={e=>updateForm({...form,name:e.target.value})}/>
        <label htmlFor="Email" >Email:</label>
        <input type="email"  value={form.email} onChange={e=>updateForm({...form,email:e.target.value})}/>
        <label htmlFor="Password">Password</label>
        <input type="password" value={form.password} onChange={e=>updateForm({...form,password:e.target.value})}/>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>NAME:{form.name}</p>
        <p>Email:{form.email}</p>
        <p>PASSWORD:{form.password}</p>
      </div>

    </div>

    {error&& <p style={{color:"red"}}>{error}</p>}

    <div>

    </div>

  </div>

  )
}
}


export default App
