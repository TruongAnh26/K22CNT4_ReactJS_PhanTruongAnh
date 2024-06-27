import logo from './logo.svg';
import './App.css';
import PtaList from './components/PtaList';
import { getDataFromMockApi } from './api/ptaApi';
import { useEffect, useState } from 'react';
function App() {
  const [ptaData, setPtaData] = useState([]);
  useEffect(() => {
    reloadData()
  }, []);

  function reloadData() {
    getDataFromMockApi().then((data) => {
      setPtaData(data);
    });
  }

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockAPI</h1>
      <hr />
      <PtaList renderData={ptaData} />
    </div>
  );
}

export default App;
