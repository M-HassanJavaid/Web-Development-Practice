import React from 'react';
import './style.css'

const card = (props) => {
  return (
    <div className='card'>
      <h1 className="card-heading">{props.title}</h1>
      <p className="card-description">{props.description}</p>
    </div>
  )
}

export default card
