import React, { useState, useEffect } from 'react'

export default function ConsumingAPI() {

  const [data, setData] = useState([])
  const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

  useEffect(() => {

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result)
        console.log(result);
      })
    
  }, [])  
  
  return (
    <>    
      <iframe src={"https://ghostbin.co/paste/6e47"} title="code"></iframe>
      <h1>Example</h1>
      <ul>
        {
          data.map((d, i) => (
            <li key={i}>{d}</li>
          ))
        }
      </ul>    
    </>
  )
}
