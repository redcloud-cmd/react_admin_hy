// import { useState } from "react";

// function Father() {
//   const [count, setCount] = useState(10);
//     function add (){
//     // alert(1)
//     setCount(count+1)
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={add}>增加</button>
//     </>
//   );
// }
// export default Father;

// import {useState} from 'react'
import React from "react";
class Father extends React.Component {
    fn(num){
        alert(num)
    }
  render() {

    return (
      <>
        <div>你好</div>
        <button onClick = {this.fn.bind(this,3)}>
            点击事件
        </button>
      </>
    );
  }
}

export default Father;
