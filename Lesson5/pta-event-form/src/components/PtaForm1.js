import React, { Component } from 'react'

export default class PtaForm1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentName: 'Phan Trường Anh'
    }
  }
  handleChange = (event) => {
    this.setState({ studentName: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    alert('Student Name: ' + this.state.studentName)
  }
  render() {
    return (
      <div>
        <h2>Demo React Form - text</h2>
        <form>
          <label>Student Name: </label>
          <input value={this.state.studentName} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
