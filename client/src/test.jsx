
import './App.css';
import { BsCart4 } from "react-icons/bs";
import { useState } from 'react';
import { Button , InputGroup  } from 'react-bootstrap';


function BasicExample() {
  const [user , setUser] = useState(
                                     {
                                      name:"",
                                      prenm:"",
                                      movi1 : {id:1,titl:"the walking dead ",name:"darle"},
                                      movi2 : {id:2,titl:" walking ", name:"rick"}
                                     })


 const clicktochange = () => {

        setUser((P) => ({ ...P, movi1: { 
           ...P.movi1,name: P.movi1.id === 1 ? "hello" : P.movi1.name, },
                              }));
       };
                                    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.trim() === '' || user.prenm.trim() === '') {
      alert('Fields cannot be empty.');
      return;
    }
    alert('Name: ' + user.name + ', Prénom: ' + user.prenm);
 };



 

  return (
    < >
   
    <InputGroup onSubmit={handleSubmit}>
     <input type='text' placeholder='name' onChange={(e)=>setUser({ ...user, name: e.target.value })}/>
     <input type='text' placeholder='prenom' onChange={(e)=>setUser({ ...user, prenm: e.target.value })}/><br/>
     <Button onClick={handleSubmit}>click me</Button>
     <Button onClick={clicktochange}>click to change</Button>
    </InputGroup>
    
    <h1 className=" text-orange-900 "> 
    <BsCart4 />
     
   </h1>{user.name}
   <ul>
    <li>{user.movi1.name}</li>
    <li>{user.movi2.name}</li>
   </ul>
   
</>
  );
}




export default BasicExample;
