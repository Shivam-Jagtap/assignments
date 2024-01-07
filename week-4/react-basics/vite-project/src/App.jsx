import React, { useEffect, useState } from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

var todoId = 0;

// function without useState
function handleClick(){
  const title = document.getElementById('title');
  const desc = document.getElementById('desc');
  
  const newD = document.createElement('div');
  newD.id = todoId++;
  const titleD = document.createElement('div');
  titleD.innerHTML = title.value;
  const descD = document.createElement('div');
  descD.innerHTML = desc.value;
  
  newD.appendChild(titleD);
  newD.appendChild(descD);
  // alert(todoId);
  document.getElementById('root').appendChild(newD);
}

function App() {

  return (
    <>
      <div>
      <input type='text' id='title' placeholder='TODO' required autoComplete='off'></input><br></br>
      </div>
      <div>
      <input type='text' id='desc'  placeholder='Description' required autoComplete='off'></input><br></br>
      </div>
      <button onClick={handleClick}>submit</button>
   
    </>
  )
}



// function App(){
//   const [todo,setTodo] = useState([{title : '',desc : ''}]);

//   function handletodo(){
//     setTodo([...todo,{title:document.getElementById('title').value , desc :document.getElementById('desc').value}]);
//   }

 
  // return(
  //   <>
  //     <div>
  //     <input type='text' placeholder='todo' id='title'></input><br></br>
  //     <input type='text' placeholder='description' id = 'desc'></input><br></br>
  //     <button onClick={handletodo}>submit</button>
  //     </div>
  //     {todo.map((todo)=>{
  //       return <Todo title = {todo.title} desc = {todo.desc} />
  //     })}
      

  //   </>
  // );

  function Todo(props){
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  }
// }

