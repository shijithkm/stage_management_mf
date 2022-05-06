import React from 'react'
import store from 'host/store';

export default ()=>{
    return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
        <div className='flex-grow'> Awesome Header</div>
        <div>{store.count}</div>
        <div><button className="bg-red-300 text-white font-bold py-2 px-4 rounded" onClick={()=>store.setCount(0)}>Clear</button></div>
    </header>
    );
}


