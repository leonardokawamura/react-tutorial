import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <iframe src={"https://ghostbin.co/paste/z2yz"} title="code"></iframe>
      <h1>Example</h1>
      <p>Now is: {time}</p> 
    </>
  )
}
