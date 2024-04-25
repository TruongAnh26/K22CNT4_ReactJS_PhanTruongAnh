import React, { Component } from 'react'

export default class PTA_Event_Form1 extends Component {
    eventHandler = () => {
        alert('Button clicked')
    }
    eventHandler2 = () => {
        alert('Button clicked2')
    }
  render() {
    return (
        <div className='alert alert-danger'>
            <button onClick={this.eventHandler()}>click1</button>
            <button onClick={this.eventHandler2}>click2</button>
        </div>
    )
  }
}
