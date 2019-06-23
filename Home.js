import React,{Component} from 'react';

class Home extends Component{

constructor(){
  super();
  this.state = {
    name : "Mohan",
    age : 21,
    address : [
      {
        building : "Asha kutir",
        gali : "Vishnu gali",
        colony : "Shukla colony",
        city : "Ranchi"
      },
      {
        building : "Anand Bhawan",
        gali : "Pipra toli",
        colony : "Saket nagar",
        city : "Hazaribagh"
      }
    ]
  }
}
render(){
  return (
    <div>
   <h1>Person detail</h1>
   <p>
Name : {this.state.name}
   </p>
     <p>
Age : {this.state.age}
   </p>
  <hr/>
  <table>
  <th>No.</th>
  <th>Building</th>
  <th>Gali</th>
  <th>Colony</th>
  <th>City</th>
{
this.state.address.map((add,i)=>{
  return (
  <tr>
<td>{i+1}</td>  
<td>{add.building}</td>
<td>{add.gali}</td>
<td>{add.colony}</td>
<td>{add.city}</td>
  </tr>

  )
})

}
</table>

    </div>
  )
}

}

export default Home;