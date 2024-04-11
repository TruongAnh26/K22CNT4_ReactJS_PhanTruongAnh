import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pta_Func from './components/Pta_Func';
import Pta_ClassComp from './components/Pta_ClassComp';

function App() {
  const users = {
    name: "Truong Anh",
    lastName: "Phan",
    age: 20
  }

  function formatName(user) {
    return (
      <h2>xin chao {user.lastName} {user.name}</h2>
    )
  }
  return (
    <div className="App">
      <div>
        <p>fullName {users.lastName} {users.name}</p>
        <p>Age: {users.age}</p>
        {formatName(users)}
      </div>
      <div>
        <Pta_Func />
        <Pta_Func
          name={users.name}
          lastName={users.lastName}
          age={users.age}
        />
      </div>
      <div>
        <Pta_ClassComp />
        <Pta_ClassComp
          name={users.name}
          lastName={users.lastName}
          age={users.age}
        />
      </div>
    </div>
  );
}

export default App;
