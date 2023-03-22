import React from "react";


const TodoList=(props)=>{
   
    return(<>
           <div className="todo_list">
           <button className="fa fa-times" aria-hidden="true" 
           onClick={()=>{props.onselect(props.id)}}>x</button>
            <li>{props.text}</li>
           </div>
     
    </>)
  
    

    
}

export default TodoList;