import React, { useContext } from 'react';
import {ListContext} from './App';

function ListItem({work,done,i}) {
    const {dispatch} = useContext(ListContext);
    return (
        <div className="ui card">
            <div className="content">
                <div className="meta">
                    <span className="left floated category">
                        
                        <input 
                            type="checkbox"
                            onClick={()=>{
                                dispatch({
                                    type:'UPDATE',
                                    payload:i
                                })
                            }}
                            checked={done? true: false}
                        
                        />
                        <span className="text" style={{textDecoration: done ? 'line-through':''}}>{work}</span>
                    </span>
                    <span className="right floated icon">
                        <i className="trash alternate outline icon" onClick={()=>{
                            dispatch({
                                type: 'DELETE',
                                payload:i
                            })
                        }}></i>
                    </span>
                </div>
                
            </div>
        </div>

    )
}

export default ListItem
