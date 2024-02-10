import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={() => {props.greetHandler('child')}}>Send Alert</button>
    </div>
  )
}

export default Child
