import React from 'react'
import Pizza from '../assets/pizza.jpg'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className='headerContainer' style={{backgroundImage: `url(${Pizza})`}}>
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        
        <Link to='/menu'>
          ORDER NOW
        </Link>
       
      </div>
  
    </div>
  )
}
