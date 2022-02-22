import React,{useState} from "react";

const Todo = ()=>{

const [userName,setUserName] = useState("");
const [todoArr,setTodoArr] = useState([]);


    const inpVal =(event)=>{
    setUserName(event.target.value)
      }


    const addTodo = ()=>{
        setTodoArr([...todoArr,userName]);
        setUserName("")
      }

      const removeAll=()=>{
        setUserName("");
        setTodoArr([]);
      }

      return [userName,todoArr,addTodo,removeAll,inpVal]

}

export default Todo;