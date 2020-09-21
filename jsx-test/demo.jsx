/* @jsx _c */

import React, { Component } from "react";

class Todo extends Component{
   constructor(props){
      super(props)
      this.state = {
        list:[1],
        title:''
      }
   }

  //  state={
  //    list:[1],
  //    title:''
  //  }

   Change (e){
      this.setState({
        title:e.target.value
      })
   }

   add() {
      const {list,title}= this.state;
      this.setState({
        list:this.state.list.concat(title),
        title:''
      })

   }



   render(){
     const {list,title} = this.state;
     return (
       <div>
         <input value={title} onChange={this.Change}/>

         <button onClick={this.add}>add</button>

          <ul>
            {
              list.map((item, index)=>(
                  <li key = {index}>{item}</li>
              ))
            }
          </ul>
       </div>
       
     )
   }
}

export default Todo;
