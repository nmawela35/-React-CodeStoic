import React from 'react'

function Hello({person}) {
  return (
    <div>
        <h2>{person.name}</h2>
        <h2>{person.seatNumbers}</h2>
    </div>
  )
}

export default Hello