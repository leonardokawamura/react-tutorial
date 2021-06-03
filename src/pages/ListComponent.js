import React from 'react'

function ListItem({ value }) {
  return (
    <li>{value}</li>
  )
}

export default function ListComponent() {
  const numbers = [1,2,3,4,5,6]

  const numbersList = numbers.map((n, i) => (
    <ListItem key={i} value={n} />
  ))

  return (
    <div>
      <iframe src={"https://ghostbin.co/paste/cmtpp"} title="code"></iframe>
      <ul>
        {numbersList}  
      </ul>
    </div>
  )
}
