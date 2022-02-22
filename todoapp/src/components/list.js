import React from "react";




 

// const Listcomp = ({todoArrList})=>{
  
//     return <>
//     {
//   todoArrList.map((val,ind)=>{
//     return <li key={ind}> {val}
//      {/* <span onClick={()=>removeItem(ind)}>X</span> */}
//      </li>
//   })
// }
//     </>
// }


const Listcomp = ({todoArrList})=>{
  
  return <>
  {
todoArrList.map((val,ind)=>{
  return <li key={ind}> {val}
   {/* <span onClick={()=>removeItem(ind)}>X</span> */}
   </li>
})
}
  </>
}




export default Listcomp;