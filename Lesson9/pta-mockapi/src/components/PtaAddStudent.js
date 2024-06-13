import React from 'react'

export default function PtaAddStudent({ setNewData }) {
    const [ptaStudentId, setPtaStudentId] = React.useState('');
    const [ptaStudentName, setPtaStudentName] = React.useState('');
    const [ptaStudentEmail, setPtaStudentEmail] = React.useState('');
    const [ptaStudentPhone, setPtaStudentPhone] = React.useState('');
    const [ptaStudentAge, setPtaStudentAge] = React.useState('');

    const ptaHandleSubmit = () => {
        setNewData({ptaId: ptaStudentId, ptaName: ptaStudentName, ptaEmail: ptaStudentEmail, ptaPhone: ptaStudentPhone, ptaAge: ptaStudentAge})
        
        setPtaStudentId('');
        setPtaStudentName('');
        setPtaStudentEmail('');
        setPtaStudentPhone('');
        setPtaStudentAge('');
    }

  return (
    <div className='container border rounded-1'>
        <div className=''>
            <div className='form-group'>
                <label className='form-label' htmlFor='txtId'>ID</label>
                <input type='text' onChange={e=>setPtaStudentId(e.target.value)} value={ptaStudentId}  className='form-control' id='txtId' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtName'>Name</label>
                <input type='text' onChange={e=>setPtaStudentName(e.target.value)} value={ptaStudentName} className='form-control' id='txtName' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtPrice'>Email</label>
                <input type='text' onChange={e=>setPtaStudentEmail(e.target.value)} value={ptaStudentEmail} className='form-control' id='txtEmail' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtPrice'>Phone</label>
                <input type='text' onChange={e=>setPtaStudentPhone(e.target.value)} value={ptaStudentPhone} className='form-control' id='txtPhone' />
            </div>
        </div>
        <div className=''>
            <div className='form-group'>
                <label htmlFor='txtPrice'>Age</label>
                <input type='text' onChange={e=>setPtaStudentAge(e.target.value)} value={ptaStudentAge} className='form-control' id='txtAge' />
            </div>
        </div>
        
        <div className=''>
            <button className='btn btn-primary my-4' onClick={ptaHandleSubmit}>Thêm</button>
        </div>
    </div>
  )
}
