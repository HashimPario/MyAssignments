import React,{useState} from 'react';
import Listcomp from './components/list';
import Style from './style.module.css' 
import Todo from './components/todo';


function App() {


  let [userName,todoArr,addTodo,removeAll,inpVal] = Todo();


  // const removeItem=(ind)=>{
  //   let arr = [...todoArr];
  //   arr.splice(ind,1);
  //   setTodoArr(arr)
  // }
  return (
    <div className={Style.mainDiv}>

   <h1 className={Style.heading}>Todo App</h1>
   <input className={Style.inp} value={userName} id="username" onChange={inpVal}/>

<button className={Style.btn} onClick={addTodo}>
  Add Todo
</button>

<button className={Style.btn} onClick={removeAll}>
  Delete All
</button>

<Listcomp todoArrList={todoArr}/>

    </div>
  );
}

export default App;