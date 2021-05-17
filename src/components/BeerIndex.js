import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function BeerIndex() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [beers, setBeers] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(response.data)

    }
    getData()
  },[])
  console.log(beers)


  const handleInput = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

  function filterBeers() {
    return beers.filter(beer => {
      console.log('hello')
      return (
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  
    })
  }


  
  return ( 
    <>
      <input className ="input is-medium" type="text" placeholder="Search... " onChange={handleInput}></input>
      <div className="main-container"> {
        beers ? 

          filterBeers().map(beer =>  {
            return  <Link key={beer.id} to={`/beers/${beer.id}`}>
              <div className="container-beer" key={beer.id}> 
              
                <div className="text-name">
                  <h1 className ="main-name">{beer.name}</h1>
                  <p>`{beer.tagline}`</p>
                </div>
                <figure>
                  <img className="beers" src={beer.image_url} alt={beer.name} />
                </figure>
              </div>
            
            </Link>
           
          }
          )
          :       
          <p>Loading....</p>
      }
      </div>
    </>
  )

}

export default BeerIndex