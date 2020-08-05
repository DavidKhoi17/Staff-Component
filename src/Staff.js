import React, { Component } from 'react';

class Staff extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      nameUpdate : false,
      nameInput : this.props.name
    }
  }

  handleNameEdit = (e)=>{
    this.setState({
      nameUpdate : true
    })
  }

  handleNameBlur = (e)=>{
    var id = this.props.id
    var data = {
      name: this.state.nameInput
    }
    this.props.updateStaff(id, data)
    this.setState({
      nameUpdate: false
    })
  }

  handleNameChange = (e)=>{
    this.setState({
      nameInput: e.target.value
    })
  }

  removeBtn = (e)=>{
    var id = this.props.id
    this.props.removeStaff(id)
  }

  render(){
    return(
        <div className="staff">
            <div className="staff-body">
                <i className="far fa-times-circle staff-remove" onClick={this.removeBtn}></i>
                <div className="staff-name" onDoubleClick={this.handleNameEdit}>
                  {
                    this.state.nameUpdate == true ? (
                      <input type="text" className="form-control" value={this.state.nameInput} onBlur={this.handleNameBlur} onChange={this.handleNameChange}/>
                    ) : this.props.name
                  }
                </div>
                <div className="staff-position">
                    {this.props.position}
                </div>
            </div>
        </div>
    )
  }
}

export default Staff;
