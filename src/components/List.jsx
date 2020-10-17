import React, { useContext } from 'react';
import ListItem from './ListItem';
import {ListContext} from './App';

function List() {
    const {list} = useContext(ListContext)
    return (
        <div>
            {
                list.map((e,i)=>{
                    return <ListItem work={e.work} done={e.done} i={i} />
                })
            }
            
        </div>
    )
}

export default List
