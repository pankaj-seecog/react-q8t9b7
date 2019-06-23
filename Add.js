import React,{Component} from 'react';
class Add extends Component{
constructor(){
  super();
  this.state={
    a : 2,
    b : 5,
    c : 0
  }
}
addNumbers = () =>{
var ans = this.state.a + this.state.b;
this.setState({
  c : ans
})
}
render(){
  return (
    <div>
<p>
First Number : <input value={this.state.a}/>
</p>
<p>
Second Number : <input value={this.state.b}/>
</p>
<p>
The sum is {this.state.c}
</p>
<p>
<button onClick={this.addNumbers}>Add Numbers</button>
</p>
    </div>
  )
}

}

export default Add;