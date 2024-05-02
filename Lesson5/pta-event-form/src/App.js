import React, { Component } from 'react'
import PtaForm1 from './components/PtaForm1'
import PtaForm2 from './components/PtaForm2'
import PtaForm3 from './components/PtaForm3'

export default class App extends Component {
  ptaSubmit = (event) => {
    console.log("APP", event)
  }
  render() {
    return (
      <div>
        <h2>Contolled component ReactJS</h2>
        <PtaForm1 />
        <PtaForm2 />  
        <PtaForm3 onSubmit ={this.ptaSubmit}/>
      </div>
    )
  }
}

