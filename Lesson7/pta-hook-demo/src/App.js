import logo from './logo.svg';
import './App.css';
import Pta_useState from './components/Pta_useState';
import PtaUseEffect from './components/PtaUseEffect';
import PtaUseContext from './components/PtaUseContext';

function App() {
  return (
    <div className="container border mt-3">
      <h1>PhanTruongAnh - hook</h1>
      <Pta_useState />
      <PtaUseEffect />
      <PtaUseContext />
    </div>
  );
}

export default App;
