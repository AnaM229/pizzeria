import React from 'react'

export default function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div ><img src={image}></img></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}
