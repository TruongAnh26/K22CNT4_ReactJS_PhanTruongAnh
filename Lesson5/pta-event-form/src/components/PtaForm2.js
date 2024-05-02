import React, { Component } from 'react'

export default class PtaForm2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: "PTA-HTML"
    }
  }
  ptaHandleChange = (event) => {
    this.setState({ course: event.target.value })
  }

  ptaHandleSubmit = (event) => {
    event.preventDefault()
    alert('Course: ' + this.state.course)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.ptaHandleSubmit}>
          <label>Course: </label>
          <select value={this.state.course} onChange={this.ptaHandleChange}>
            <option value="PTA-HTML">PTA-HTML</option>
            <option value="PTA-CSS">PTA-CSS</option>
            <option value="PTA-JS">PTA-JS</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
