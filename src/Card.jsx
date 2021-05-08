import React from 'react'

function Card(props) {
  return (
    <div style={{
      width: "50%", 
      margin: '10px auto 30px auto',
      boxShadow: '0 5px 10px 2px rgba(0,0,0,0.25)',
      padding: '20px'
      }}>
        
      {props.children}
    </div>
  )
}

export default Card
