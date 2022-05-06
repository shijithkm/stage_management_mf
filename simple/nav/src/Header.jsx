import React from 'react'

export default ({count,onClear})=>(
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
        <div className='flex-grow'> Awesome Header</div>
        <div>{count}</div>
        <div><button onClick={onClear}>Clear</button></div>
    </header>
)

