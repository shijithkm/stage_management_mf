import React from 'react'
import {useCount} from 'host/store';

export default ()=>{
    
    const [count,setCount] = useCount(0);

    return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
        <div className='flex-grow'> Awesome Header</div>
        <div>{count}</div>
        <div><button onClick={()=>setCount(0)}>Clear</button></div>
    </header>
    );
}


