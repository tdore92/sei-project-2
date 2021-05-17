import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to= "/BeerIndex">
      <div className="home-container" >
        <img className="logo" src="https://i.pinimg.com/originals/ea/b6/5b/eab65bccd941cb4ee55d5880c4419aa8.jpg" alt ="brewdog" />
      </div>
    </Link>
  )
}

export default Home