import React, { Component } from 'react'

export default class PtaForm3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: 'Phan Trường Anh',
            age: 45,
            course: "PTA-HTML",
            gender: ''
        }
    }

    ptaHandleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }
    ptaHandleSubmit = (event) => {
        event.preventDefault()
        alert('Student Name: ' + this.state.studentName + 
            '\nAge: ' + this.state.age + 
            '\nCourse: ' + this.state.course + 
            '\nGender: ' + this.state.gender)
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.ptaHandleSubmit}>
            <div>
                <label>Student Name: </label>
                <input name='studentName' value={this.state.studentName} onChange={this.ptaHandleChange}/>
            </div>
            <div>
                <label>Age: </label>
                <input name='age' value={this.state.age} onChange={this.ptaHandleChange}/>
            </div>
            <div>
                <label>Course: </label>
                <select name='course' value={this.state.course} onChange={this.ptaHandleChange}>
                    <option value="PTA-HTML">PTA-HTML</option>
                    <option value="PTA-CSS">PTA-CSS</option>
                    <option value="PTA-JS">PTA-JS</option>
                </select>
            </div>
            <div>
                <label>Gender</label>
                <input name='gender' type="radio" value={true} onChange={this.ptaHandleChange}/>Nam 
                <input name='gender' type="radio" value={false} onChange={this.ptaHandleChange}/>Nữ
            </div> 
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
