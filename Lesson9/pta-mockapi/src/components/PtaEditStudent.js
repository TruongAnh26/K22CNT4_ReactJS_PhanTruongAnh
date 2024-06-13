import React from 'react'

export default function PtaEditStudent({ ptaStudentInfo, ptaUpdateStudent}) {
    console.log("STUDENTT INFO: ", ptaStudentInfo)
    const [ptaStudentName, setPtaStudentName] = React.useState(ptaStudentInfo.ptaName);
    const [ptaStudentEmail, setPtaStudentEmail] = React.useState(ptaStudentInfo.ptaEmail);
    const [ptaStudentPhone, setPtaStudentPhone] = React.useState(ptaStudentInfo.ptaPhone);
    const [ptaStudentAge, setPtaStudentAge] = React.useState(ptaStudentInfo.ptaAge);

    const ptaHandleEdit = async () => {
        await ptaUpdateStudent({ptaName: ptaStudentName, ptaEmail: ptaStudentEmail, ptaPhone: ptaStudentPhone, ptaAge: ptaStudentAge})
        setPtaStudentName('');
        setPtaStudentEmail('');
        setPtaStudentPhone('');
        setPtaStudentAge('');
    }

  return (
    <div className='container border rounded-1'>
        <h2>Sửa</h2>
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
            <button className='btn btn-primary my-4' onClick={ptaHandleEdit}>Sửa</button>
        </div>
    </div>
  )
}
