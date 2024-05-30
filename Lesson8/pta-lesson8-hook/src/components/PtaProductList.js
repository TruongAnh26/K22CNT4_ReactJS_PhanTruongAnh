import React from 'react'

export default function PtaProductList({listProducts}) {
    let total = 0;
  return (
    <div>
        <table className='table border text-center rounded-1'>
            <thead>
                <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {listProducts.map((product,index) => (
                    total += product.price,
                <tr key={index+1}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <i class="fa-solid fa-pen-to-square mx-2"></i>
                        <i class="fa-solid fa-trash"></i>
                    </td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='3' className='text-end'>
                        Tổng: {total}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
