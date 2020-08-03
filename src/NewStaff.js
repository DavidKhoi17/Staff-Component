import React, { Component } from 'react';

class NewStaff extends Component {
  constructor(props){
    super(props)

    this.state = {
        nameInput: '',
        positionInput: '',
    }
  }

  nameChange = (e)=>{
    this.setState({
        nameInput:e.target.value
    })
  }

  positionChange = (e)=>{
    this.setState({
        positionInput:e.target.value
    })
  }

  addBtn = (e)=>{
      e.preventDefault()
      var data ={
        name: this.state.nameInput,
        position: this.state.positionInput,
      }
      this.props.addStaff(data)
      this.setState({
        nameInput: '',
        positionInput: '',
      })
  }

  render(){
    return(
        <div className="staff new-staff">
            <form className="staff-body">
                <div className="form-group">
                    <label htmlFor="name-input">Name</label>
                    <input type="text" className="form-control" id="name-input" value={this.state.nameInput} onChange={this.nameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="position-input">Position</label>
                    <input type="text" className="form-control" id="position-input" value={this.state.positionInput} onChange={this.positionChange}/>
                </div>
        
                <button type="submit" className="btn btn-primary" onClick={this.addBtn}>Add</button>
            </form>
        </div>
    )
  }
}

export default NewStaff;
