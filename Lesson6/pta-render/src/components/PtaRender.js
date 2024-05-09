import React, { Component } from 'react'

export default class PtaRender extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
    let {renPtaProducts} = this.props
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered' >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Id</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                {renPtaProducts.map((product, index) => {
                    return (
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>{product.id}</td>
                            <td>{product.status===true ? "Active" : "Unactive"}</td>
                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
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
