import React from 'react'

export default function Taskcard(props) {
  return (
    <div>
        <p>{props.name} </p>
        <p>{props.id}</p>
        <button onClick={props.handledelte}>Delete</button>
    </div>
  )
}
