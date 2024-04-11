import React from 'react'

export default function Pta_Func({ name, lastName, age }) {
  return ( 
    <div>
      <h2>Functional component</h2>
      <p>fullName: {lastName} {name}</p>
      <p>Age: {age}</p>
      <h2>xin chao {lastName} {name}</h2>
    </div>
  )
}
