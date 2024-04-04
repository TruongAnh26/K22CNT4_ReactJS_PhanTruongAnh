import React from 'react'

export default function Func_JSX_PhanTruongAnh(props) {
    const users = {
        name: "Phan Truong Anh",
        age: 20
    }
  return (
    <div>
        <h2>Demo jsx</h2>
        <p>Welcome to ,{users.name} - {users.age}</p>
        <h3>{props.fullName}</h3>
        <h3>{props.age}</h3>
    </div>
  )
}
