import React, { Component } from 'react'
import "../App.css"
export default class PtaProductAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pta_productId: '',
            pta_productName: '',
            pta_quantity: '',
            pta_price: ''
        }
    }
    ptaHandleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }
    ptaHandleSubmit = (event) => {
        event.preventDefault()
        this.props.ptaOnSubmit(this.state)
    }
  render() {
    return (
      <div style={{padding:"10px"}} className='container border mt-5 Secondary '>
        <h2>Thêm mới sản phẩm pta-2210900087</h2>
        <form>
            <div className='input-group mb-3'>
                <label htmlFor='pta_productId' className='input-group-text'>Mã SP</label>
                <input class="form-control" type="text" placeholder="Id" name='pta_productId' value={this.state.pta_productId} onChange={this.ptaHandleChange} />
            </div>
            <div className='input-group mb-3'>
                <label htmlFor='pta_productName' className='input-group-text'>Tên SP</label>
                <input class="form-control" type="text" placeholder="Name" name='pta_productName' value={this.state.pta_productName} onChange={this.ptaHandleChange}/>
            </div>
            <div className='input-group mb-3'>
                <label htmlFor='pta_quantity' className='input-group-text'>Số lượng</label>
                <input class="form-control" type="text" placeholder="Số lượng" name='pta_quantity' value={this.state.pta_quantity} onChange={this.ptaHandleChange}/>
            </div>
            <div className='input-group mb-3'>
                <label htmlFor='pta_price' className='input-group-text'>Giá</label>
                <input class="form-control" type="text" placeholder="Giá" name='pta_price' value={this.state.pta_price} onChange={this.ptaHandleChange}/>
            </div>
            <button className='btn btn-success' onClick={this.ptaHandleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
