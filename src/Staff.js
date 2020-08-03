import React, { Component } from 'react';

class Staff extends Component {
  constructor(props){
    super(props)
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
                <div className="staff-name">
                    {this.props.name}
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
