import React from 'react'

export default function PTA_Event_Form2() {
    const eventHandler = (content) => {
        console.log("=========")
        console.log(content)
        console.log("=========")
    }
    const eventHandler2 = (content) => {
        console.log("=========")
        console.log(content)
        console.log("=========")
    }
  return (
    <div className='alert alert-succes'>
        <button onClick={eventHandler("pta")}>Gọi trước render</button>
        <button onClick={() => eventHandler2("pta")}>Gọi sau click</button>
    </div>
  )
}
