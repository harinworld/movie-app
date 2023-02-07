import React, { useState, useRef, useEffect, useContext, useLayoutEffect } from 'react';
import TodoBoard from './TodoBoard';
import { DetailContext } from './Context';

const Write = () => {
  const {member,setMember} = useContext(DetailContext);
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])
    const [isLogined, setIsLogined] = useState(false)

    const addItem=()=>{
        setTodoList([...todoList,inputValue]);
    }

    // useEffect(() => {
    //   console.log(typeof member);
    //   console.log(isLogined);
    // }, [member])

   return (
     <div className='detail-input'>
       
           <div className='input-content'>
           <div className='subtxt'>관람평 쓰기</div>
           <div className='write-box'>
             <input value={inputValue} type="text" placeholder='관람후기 작성하기' onChange={(event)=>setInputValue(event.target.value)}></input>
             {
             <button className={localStorage.getItem('isLogined') == 'true' ? "" : "off"} onClick={addItem}>등록하기</button>
           } 
           </div>
       </div>
         
         <TodoBoard todoList={todoList}/>
     </div>
   )
}

export default Write