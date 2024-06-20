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
    <div>
        <h2>Sửa</h2>
        <form>

            
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
            
            
                <button className='btn btn-primary my-4' onClick={ptaHandleEdit}>Sửa</button>
            
        </form>
    </div>) 
    }