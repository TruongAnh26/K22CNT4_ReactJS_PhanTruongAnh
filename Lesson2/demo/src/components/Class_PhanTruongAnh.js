import React, { Component } from 'react'

export default class Class_PhanTruongAnh extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullName: "Phan Truong Anh",
            age: 20
        }
    }
    users = {
        name: "Phan Truong Anh",
        age: 20
    }

    handleChange = (e) => {
        this.setState({
            fullName: "Nguyen Van A"
        })
    }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        {this.users.name} {this.users.age}

        <hr/>
        <h3>info: {this.props.info}</h3>
        <h3>time: {this.props.time}</h3>
        <hr/>
        <h3>State:
            fullName: {this.state.fullName}-
            age: {this.state.age}
        </h3>
        <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}
