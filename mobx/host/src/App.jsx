import React from "react";
import ReactDOM from "react-dom";
import Header from 'nav/Header';
import "./index.scss";
import store from 'host/store';
import { observer } from "mobx-react"


const App = observer (() => { 

  return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header count={store.count} onClear={()=>store.setCount(0)}/>
    <div>Name: host</div>
    <div>count:{store.count}</div>
    <div>
      <button onClick={()=>store.setCount(store.count + 1 )} className="bg-indigo-800 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
      </div>
  </div>
  )
});
ReactDOM.render(<App />, document.getElementById("app"));
