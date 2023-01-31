import React, { useState, useRef } from 'react';
import TodoBoard from './TodoBoard';

const Write = () => {

    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])

    const addItem=()=>{
        setTodoList([...todoList,inputValue]);
    }

  return (
    <div className='detail-input'>
        <div className='input-content'>
            <div className='subtxt'>관람평 쓰기</div>
            <div className='write-box'>
              <input value={inputValue} type="text" placeholder='관람후기 작성하기' onChange={(event)=>setInputValue(event.target.value)}></input>
              <button onClick={addItem}>등록하기</button>
            </div>
        </div>
        <TodoBoard todoList={todoList}/>
    </div>
  )
}

export default Write