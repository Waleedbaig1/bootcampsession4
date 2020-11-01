import React , {useState} from 'react';
import {Message} from './Message.js';
import './App.css';
// import {day} from 'day.js';


export default function App () {
  let[count ,setCount]= useState(1);
  let[isMorning,setMorning]=useState(true);
  return(
    <div className= {`box ${isMorning ?'dayLight':''}`}>
     {/* <day /> */}
     
     <Message counter ={count} />
      <button onClick ={()=> setCount (count+1)}>Update Counter</button>
      
      <button onClick={()=> setMorning(!isMorning)}>Day Change</button>
     
    </div>




 );

}