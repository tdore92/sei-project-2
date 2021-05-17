import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router'




function ShowBeer() {
  let favBeerArray = []
  const { beerId } = useParams()
  const history = useHistory()
  const [beer, setBeers] = React.useState(null)
  // const [favBeer, setFavBeer] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
      setBeers(response.data[0])
    }
    getData()
  },[beerId])


  const handleClick = (e) => {
    console.log(e.target.value)
    const favBeers = JSON.parse(window.localStorage.getItem('beers')) || []
    console.log(beer)
    favBeerArray = [...favBeerArray, beer]
    favBeers.push(beer)
    localStorage.setItem('beers',JSON.stringify(favBeers))
    console.log(favBeerArray)
    history.push('/myBeers')
  
  }

  /// [0]

  return (
    <section>
      <div className="card-container">  
        { beer ? 
          <div className="beer-display">
            <h3>{beer.name}</h3>
            <p><strong>First Brewed :</strong>{beer.first_brewed}</p>
            <img src={beer.image_url} alt={beer.name}/>  
            <br/>
            <h4>Alc:{beer.abv}%</h4>
            <p><strong>Description:</strong> {beer.description}</p>
            <p><strong>Food Pairing Suggestions:</strong>{beer.food_pairing}</p>
            <button type="submit" value={beerId} onClick={handleClick}>Add Beer</button>
          </div>
          :
          <p>... Loading</p>
        }
      </div>

    </section>
  )  
    

}

export default ShowBeer