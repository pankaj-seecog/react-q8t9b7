import React,{Component} from 'react';

class Average extends Component{

constructor(){
  super();
  this.state = {
    p : 99,
    c : 98,
    m : 100,
    avg : 0
  }
}

getAverage = ()=>{

  this.setState({
    avg : (this.state.p+this.state.c+this.state.m)/3
  })
}

render(){
  return (
<div>
Physics : <input value={this.state.p}/><br/>
Chemistry : <input value={this.state.c}/><br/>
Math : <input value={this.state.m}/><br/>
The average is {this.state.avg}<br/>
<button onClick={this.getAverage}>Average</button>
</div>
  )
}

}

export default Average;