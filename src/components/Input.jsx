import React, { useContext } from 'react'
import { InputContext, ListContext } from './App';

function Input() {
    const {input, setInput} = useContext(InputContext);
    const {list, dispatch} = useContext(ListContext);
    console.log(input);
    return (
        <div className="ui left icon action input">
            <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        dispatch({
                            type:'ADD',
                            payload:input
                        })
                        setInput('')

                    }
                }}
                type="text" 
                placeholder="Add your work..." 
            />
            <i className="list icon"></i>
            <button 
               onClick={()=>{
                   if(input)
                   dispatch({
                       type:"ADD",
                       payload:input
                   })
                   setInput('')
               }}
                className="ui button">Add Task</button>
        </div>

    )
}

export default Input
