import React, { Component } from 'react'
import PtaListProducts from './components/PtaListProducts'
import PtaProductAdd from './components/PtaProductAdd'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pta_Products: [
        {
          pta_productId: "2210900087",
          pta_productName: "Phan Trường Anh",
          pta_quantity: 15,
          pta_price: 1000
        },
        {
          pta_productId: "P002",
          pta_productName: "IPhone 12",
          pta_quantity: 20,
          pta_price: 1250
        },
        {
          pta_productId: "P003",
          pta_productName: "IPhone 13",
          pta_quantity: 10,
          pta_price: 1500
        }
      ]
    }
  }

  ptaOnSubmit = (product) => {
    
    this.setState({
      pta_Products: [...this.state.pta_Products, product]
    })
  }
  render() {
    return (
      <div className='container border mt-5 wrap-container'>
        <h1>Phan Trường Anh - 2210900087</h1>
        <hr/>
        <PtaListProducts renPtaProducts = {this.state.pta_Products}/>
        <PtaProductAdd ptaOnSubmit = {this.ptaOnSubmit}/>
      </div>
    )
  }
}
