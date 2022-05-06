import React,{useState} from "react";
import ReactDOM from "react-dom";
import Header from 'nav/Header';
import "./index.scss";

const App = () => { 

  const [count,setCount] = useState(0);
  return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header count={count} onClear={()=>setCount(0)}/>
    <div>Name: host</div>
    <div>count:{count}</div>
    <div>
      <button onClick={()=>setCount(count + 1 )} className="bg-indigo-800 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
      </div>
  </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
