import React from 'react'
import { useState } from 'react'

export default function Pta_useState() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([1,2])
    const ptaHandleList = () => {
        let random = Math.floor(Math.random() * 10)
        setList([...list, random])
    }
  return (
    <div>     
         <p>You click {count} time</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={ptaHandleList}>Thêm ngẫu nhiên</button>
    </div>
    
  )
}
