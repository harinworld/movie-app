import React from "react";

function TodoItem(props){
    return(
        <div className='message'>
            {props.item}
        </div>
    )
}
export default TodoItem