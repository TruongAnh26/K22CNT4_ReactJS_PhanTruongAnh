import React, { Component } from 'react'

export default class PTA_Event_Form3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Nguyen van A',
            age: 18
        }
    }

    handleChangeName = () => {
        this.setState({
            name: 'Nguyen van B'
        })
    }

    handleChangeAge = () => {
        this.setState({
            age: 20
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu</h2>
        <p>Du lieu: {this.state.name} - {this.state.age}</p>
        <button onClick={this.handleChangeName}>Change Name</button>
        <button onClick={this.handleChangeAge}>Change Name</button>
      </div>
    )
  }
}
