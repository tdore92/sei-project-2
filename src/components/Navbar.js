
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="navbar-brand">
            <Link to="/">Home</Link>
            <Link to="/BeerIndex">All Beers</Link>
            <Link to="/myBeers">My Beers</Link>
            <Link to="/about">About</Link>
            
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
