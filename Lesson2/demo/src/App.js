import './App.css';
import Class_PhanTruongAnh from './components/Class_PhanTruongAnh';
import Func_JSX_PhanTruongAnh from './components/Func_JSX_PhanTruongAnh';

function App() {
  return (
    <session clasName="App">
      <h1>Demo JSX</h1>
      <Func_JSX_PhanTruongAnh  />
      <Func_JSX_PhanTruongAnh fullName ="Phan Truong Anh" age="20" />

      <Class_PhanTruongAnh/>
      <Class_PhanTruongAnh info="Hoc ReactJS" time='11'/>
    </session>
  );
}

export default App;
