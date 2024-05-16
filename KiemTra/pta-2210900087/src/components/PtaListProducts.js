import React, { Component } from 'react'

export default class PtaListProducts extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    let {renPtaProducts} = this.props
    return (
        <div style={{padding: "10px"}} className='container border mt-5 Secondary '>
        <h2>Danh sách sản phẩm pta-2210900087</h2>
        <table className='table table-bordered' >
            <thead>
                <tr className='fw-bold'> 
                    <td>Mã SP</td>
                    <td>Tên SP</td>
                    <td>Số Lượng</td>
                    <td>Giá</td>
                </tr>
                {renPtaProducts.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>{product.pta_productId}</td>
                            <td>{product.pta_productName}</td>
                            <td>{product.pta_quantity}</td>
                            <td>{product.pta_price}</td>
                            
                        </tr>
                    )
                })}
            </thead>
            <tbody>
            </tbody>
        </table>
      </div>
      
    )
  }
}
