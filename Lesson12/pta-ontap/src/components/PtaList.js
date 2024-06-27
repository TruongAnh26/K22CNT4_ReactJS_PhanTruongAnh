import React from 'react'
export default function PtaList({renderData}) {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                    <th>MaSV</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData.map((data,index) => (
                    <tr key={data.ptaId}>
                        <td>{data.ptaId}</td>
                        <td>{data.ptaName}</td>
                        <td>{data.ptaPhone}</td>
                        <td>{data.ptaAge}</td>
                        <td>{data.ptaEmail}</td>
                        <td>
                            <i class="fa-solid fa-pen-to-square mx-2" ></i>
                            <i class="fa-solid fa-trash"></i>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
