import React, { Component } from 'react';
import NewStaff from './NewStaff';
import Staff from './Staff';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      staffs: [
        {
          id: 1,
          name: 'David',
          position: 'Leader'
        },
        {
          id: 2,
          name: 'Annie',
          position: 'Co-Leader'
        },
        {
          id: 3,
          name: 'Vivian',
          position: 'Manager'
        },
      ]
    }
  }

  addStaff = (data)=>{
    var newStaff ={
      id: Date.now(),
      ...data
    }

    var newList = [...this.state.staffs, newStaff]
    this.setState({
      staffs: newList
    })
  }
  removeStaff = (id)=>{
    var staffs = this.state.staffs

    var filtered = staffs.filter((item)=>{
      return item.id != id
    })

    this.setState({
      staffs: filtered
    })
  }
  updateStaff = ()=>{}

  render(){
    return(
      <div className="wrap">
        <div className="container">
          <div className="staffs">
            {
              this.state.staffs.map((item)=>{
                var itemProps = {
                  key: item.id,
                  ...item,
                  removeStaff: this.removeStaff
                }
                return(
                  <Staff {...itemProps}/>
                )
              })
            }
            
            <NewStaff addStaff={this.addStaff}/>
          </div>
        </div>
	    </div>
    )
  }
}

export default App;
