import React,{Component} from 'react';

class Change extends Component{

constructor(){
  super();
  this.state = {
    a : 10
  }
}


changeNumber = ()=>{
  this.setState({
    a : 100
  })
}
render(){
  return (
    <div >
The value is {this.state.a}<br/>
<button onClick={this.changeNumber}>Change Number</button>
    </div>
  )
}

}

export default Change;