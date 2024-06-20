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
    <div>

            <form>
                
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>ID</span>
                        <input type='text' onChange={e=>setPtaStudentId(e.target.value)} value={ptaStudentId}  className='form-control' id='txtId' />
                    </div>
                
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Name</span>
                        <input type='text' onChange={e=>setPtaStudentName(e.target.value)} value={ptaStudentName} className='form-control' id='txtName' />
                    </div>
                
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Email</span>
                        <input type='text' onChange={e=>setPtaStudentEmail(e.target.value)} value={ptaStudentEmail} className='form-control' id='txtEmail' />
                    </div>
                
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Phone</span>
                        <input type='text' onChange={e=>setPtaStudentPhone(e.target.value)} value={ptaStudentPhone} className='form-control' id='txtPhone' />
                    </div>
                
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>Age</span>
                        <input type='text' onChange={e=>setPtaStudentAge(e.target.value)} value={ptaStudentAge} className='form-control' id='txtAge' />
                    </div>
                
                
                    <button className='btn btn-primary my-4' onClick={ptaHandleSubmit}>Thêm</button>
            </form>
    </div>)
}
        