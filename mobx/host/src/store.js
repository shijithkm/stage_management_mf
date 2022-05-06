import { makeAutoObservable } from "mobx"


class Store{
  
  count  = 0;
  
  constructor(){
    makeAutoObservable(this)
  }

  setCount(count){
    this.count = count;
  }
}


const store = new Store();

export default store;
