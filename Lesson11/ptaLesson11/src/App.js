import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDataFromMockApi, ptaCreateStudent, ptaDeleteStudent, ptaGetStudentById, ptaUpdateStudent } from './api/ptaApi';
import PtaStudentList from './components/PtaStudentList';
import PtaAddStudent from './components/PtaAddStudent';
import PtaEditStudent from './components/PtaEditStudent';
function App() {
  const [ptaData, setPtaData] = useState([]);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [ptaStudentInfo, setPtaStudentInfo] = useState([]);
  const [ptaId, setPtaId] = useState('');
  useEffect(() => {
    reloadData()
  }, []);

  async function addNewStudent(newStudent) {
    await ptaCreateStudent(newStudent);
    reloadData()
  }
  function reloadData() {
    getDataFromMockApi().then((data) => {
      setPtaData(data);
    });
  }
  function ptaOnclickEdit(id) {
    ptaGetDataEdit(id)
  }

  async function ptaGetDataEdit(id) {
    setPtaId(id);
    console.log("ID: ", id)
    await ptaGetStudentById(id).then((data) => setPtaStudentInfo(data))
    console.log(ptaStudentInfo);
    setIsOpenEdit(true);
  }

  async function updateStudent(studentInfo) {
    await ptaUpdateStudent(ptaId,studentInfo)
    setIsOpenEdit(false);
    reloadData()
  }

  async function deleteStudent(id) {
    await ptaDeleteStudent(id)
    reloadData()
  }

  return (
    <div className="container rounded-1 ">
      <h1 className='text-center'>CRUD by Hook API</h1>
      <PtaStudentList
        listStudent={ptaData}
        onClickEdit={ptaOnclickEdit}
        onClickDelete={deleteStudent}
        />
      <PtaAddStudent setNewData = {addNewStudent} />
      {isOpenEdit && <PtaEditStudent 
                        ptaStudentInfo = {ptaStudentInfo}
                        ptaUpdateStudent = {updateStudent}  
                      />}
    </div>
  );
}

export default App;
