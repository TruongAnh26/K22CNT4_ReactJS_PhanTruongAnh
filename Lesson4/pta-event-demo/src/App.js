import React, { Component } from 'react'
import PTA_Event_Form1 from './components/PTA_Event_Form1'
import PTA_Event_Form2 from './components/PTA_Event_Form2'
import PTA_Event_Form3 from './components/PTA_Event_Form3'
import PTA_Event_Form4 from './components/PTA_Event_Form4'
export default class App extends Component {
  render() {
    return (
      <div>
        <PTA_Event_Form1 />
        <PTA_Event_Form2 />
        <PTA_Event_Form3 />
        <PTA_Event_Form4 name="PhanTruongAnh"/>
      </div>

    )
  }
}
