import React, { Component } from 'react'

export default class PtaAddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            id: '',
            status: ''
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
      <div>
        <h2>
            Thêm sản phẩm
        </h2>
        <form>
            <div className='input-group mb-3'>
                <label htmlFor='title' className='input-group-text'>Name</label>
                <input class="form-control" type="text" placeholder="Name" name='title' value={this.state.name} onChange={this.ptaHandleChange} />
            </div>
            <div className='input-group mb-3'>
                <label htmlFor='id' className='input-group-text'>Id</label>
                <input class="form-control" type="text" placeholder="Id" name='id' value={this.state.id} onChange={this.ptaHandleChange}/>
            </div>
            <div className='input-group mb-3'>
                <label htmlFor='status' className='input-group-text'>Status</label>
                <input class="form-control" type="text" placeholder="Status" name='status' value={this.state.status} onChange={this.ptaHandleChange}/>
            </div>
            <button className='btn btn-primary' onClick={this.ptaHandleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
