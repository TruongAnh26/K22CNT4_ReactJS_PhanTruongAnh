import React, { Component } from 'react'
import PtaRender from './components/PtaRender'
import PtaAddProduct from './components/PtaAddProduct'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {title: "Phan Trường Anh" , id: 2210900087, status: true},
        {title: "BWM" , id: 2, status: true},
        {title: "Honda" , id: 3, status: false},
        {title: "Apple" , id: 4, status: true},

      ]
    }
  }
  ptaOnSubmit = (product) => {
    let products = this.state.products
    products.push(product)
    this.setState({
      products: products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Phan Trường Anh - Render Data - EventForm</h1>
        <hr/>
        <PtaRender renPtaProducts = {this.state.products}/>
        <PtaAddProduct ptaOnSubmit = {this.ptaOnSubmit}/>
      </div>
    )
  }
}
