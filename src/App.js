import React, { useState } from 'react';
import TodoLists from "./TodoLists"

const App=() =>{
  const[inputlist,setinputlist]=useState();

  const[items,setitems]=useState([]);
  const itemEvent=(event)=>{
      setinputlist(event.target.value);
  };

  const listofItems=()=>{
      setitems((olditems)=>{
        return [...olditems,inputlist];
      });
      setinputlist("");
  };
  const deleteitems=(id)=>{
    console.log("deleted")
    setitems((olditems)=>{
      return olditems.filter((arrelem,index)=>{
         return id!==index;
      })
    });
  };

  return(
    <>
      <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder='Add an item' value={inputlist} onChange={itemEvent}/>
            <button onClick={listofItems}>+</button>
            <ol>
              {/* <li>{inputlist}</li> */}
             { items.map ((itemval,index)=>{
                return <TodoLists key={index} id={index} text={itemval} onselect={deleteitems}/>;
              })}
            </ol>
        </div>
      </div>
    </>
  )
}


export default App;
