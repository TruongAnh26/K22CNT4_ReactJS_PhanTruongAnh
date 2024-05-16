import React, { useEffect,useState } from 'react'

export default function PtaUseEffect() {
    const [count, setCount] = useState(0)
    const ptaHandleClick = () => {
        setCount(count => count + 1)
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    useEffect(() => {
        console.log('Chạy lần đầu')
    }, [])
    useEffect(() => {
        console.log('Chạy mỗi khi count thay đổi')
    }, [count])
  return (
    <div>
        <h2>Demo-useEffect: You Clicked {count} times</h2>
        <button onClick={ptaHandleClick}>Click me</button>
    </div>
  )
}
