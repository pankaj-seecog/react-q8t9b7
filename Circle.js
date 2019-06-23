import React,{Component} from 'react';

class Circle extends Component{
constructor(){
  super();
  this.state = {
    a : 0,
    b : 0,
    c : 0
  }
}
sum=()=>{
this.setState({
  c : parseInt(this.state.a)+parseInt(this.state.b)
})
}
render(){
  return (
    <div>
First Number : <input value={this.state.a} onChange={(evt)=>this.setState({a : evt.target.value})}/> <br/>

Second Number : <input value={this.state.b} onChange={(evt)=>this.setState({b : evt.target.value})}/> <br/>

The sum is {this.state.c}<br/>

<button onClick={this.sum}>Sum</button>

    </div>
  )
}

}

export default Circle;


// a,b,c
// s = (a+b+c)/2
// ar = Math.sqrt(s*(s-a)*(s-b)*(s-c))
