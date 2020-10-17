import React, { createContext, useReducer, useState } from 'react';
import Input from './Input';
import List from './List';
import '../styles.css'

export const ListContext = createContext();
export const InputContext = createContext();


function App() {

    function reducer(state, action) {
        switch (action.type) {
            case 'ADD':
                return [...state, {
                    work: action.payload,
                    done: false
                }]
            case 'UPDATE':
                return state.map((e,i)=>{
                    if(i === action.payload){
                        e.done = !e.done
                    }
                    return e
                })
            case 'DELETE':
                return state.filter((e,i)=>{
                    return i !== action.payload
                })
        }
    }

    const [input, setInput] = useState('');
    const [list, dispatch] = useReducer(reducer, [])
    return (
        <div id="container">
            <h1>✏️To Do List✏️</h1>
            <ListContext.Provider value={{list, dispatch}}>
                <InputContext.Provider value={{ input: input, setInput: setInput }}>
                    <Input />
                </InputContext.Provider>
                <List />
            </ListContext.Provider>
        </div>
    )
}

export default App
