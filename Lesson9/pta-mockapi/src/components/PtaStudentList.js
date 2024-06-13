import React from 'react'

export default function PtaStudentList({ listStudent, onClickEdit, onClickDelete}) {
  return (
    <div>
        <table className='table border text-center rounded-1'>
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
                {listStudent.map((student,index) => (
                <tr key={student.ptaId}>
                    <td>{student.ptaId}</td>
                    <td>{student.ptaName}</td>
                    <td>{student.ptaPhone}</td>
                    <td>{student.ptaAge}</td>
                    <td>{student.ptaEmail}</td>
                    <td>
                        <i class="fa-solid fa-pen-to-square mx-2" onClick={() => onClickEdit(index + 1)}></i>
                        <i class="fa-solid fa-trash"onClick={() => {
                            if (window.confirm('Are you sure you want to delete this student?')) {
                                onClickDelete(index + 1);
                            }
                        }}></i>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}


