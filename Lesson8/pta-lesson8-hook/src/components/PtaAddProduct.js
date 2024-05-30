import React, { useState } from 'react'

export default function PtaAddProduct({ptaOnSubmit}) {
    const [ptaProductId, setPtaProductId] = useState('');
    const [ptaProductName, setPtaProductName] = useState('');
    const [ptaProductPrice, setPtaProductPrice] = useState('');

    const ptaHandleSubmit = () => {
        ptaOnSubmit({id: ptaProductId, name: ptaProductName, price: ptaProductPrice});
        setPtaProductId('');
        setPtaProductName('');
        setPtaProductPrice('');
    }
  return (
    <div className='container border rounded-1'>
        <div className=''>
            <div className='form-group'>
                <label className='form-label' htmlFor='txtId'>Mã sản phẩm</label>
                <input type='text' onChange={e=>setPtaProductId(e.target.value)} value={ptaProductId}  className='form-control' id='txtId' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtName'>Tên sản phẩm</label>
                <input type='text' onChange={e=>setPtaProductName(e.target.value)} value={ptaProductName} className='form-control' id='txtName' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtPrice'>Giá</label>
                <input type='text' onChange={e=>setPtaProductPrice(e.target.value)} value={ptaProductPrice} className='form-control' id='txtPrice' />
            </div>
        </div>
        
        <div className=''>
            <button className='btn btn-primary my-4' onClick={ptaHandleSubmit}>Thêm</button>
        </div>
    </div>
  )
}
