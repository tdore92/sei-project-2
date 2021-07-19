# Project-2

<h1>Overview</h1>

<p>Our second GA project was done in pairs- using a public API, within 24 hours, we built a react application with the option to utilise a router and several pages. Craig and I decided on creating a Brewdog related webpage to show the brands products.</p>

<h2>Brief</h2>

<li>The App must consume a public API.</li>
<li>Must have one classical & functional component.</li>
<li>Have a router, with several pages.</li>
<li>Be deployed online, and contain a git repository hosted on Github.</li>
<li>Adhere to the DRY (Don’t Repeat Yourself) principles.</li>

<h2>Technologies Used</h2>

<li>React.js</li>
<li>Git</li>
<li>Github</li>
<li>Bulma</li>

<h2>Approach Taken</h2>

<p>Faced with an array of public API’s we settled on Brewdog, with its public use domain easily accessible through simple GET requests. We created our RESTful React app and, firstly, used React Router to link our Index, Show and Home components. We then created a NavBar component and imported a Link helper component to string together pages for navigation.</p>

```
function App() {

  return (  
    <BrowserRouter> 
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers/:beerId" component={ShowBeer} />
        <Route path="/BeerIndex" component={BeerIndex} /> 
        <Route path="/About" component={About}/>
        <Route pth="/MyBeers" component={MyBeers} />
      </Switch>
    </BrowserRouter>
  
  )
}
```

<h3>Index</h3>

<p>Once our pages were connected we made an AJAX axios request for the API, filtered our desired object fields and mapped them out onto the index page. Initially, we created a separate Card.js component to display the fields and import them into Index.js, but eventually decided to display the fields through divs in the map function, subsequently styling said tags with Bulma. Wrapping the function in a Link ensued clicking a single card would take the user to the Show.js page for that items id.</p>

```
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
```
<p>We also added input search functionality through a handleInput() event.</p>

```
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
```

<h3>Show</h3>

<p>For the show page we displayed more of the object fields through ADD METHOD. The challenge here was to add the ability for users to add their favourite drinks to a MyBeer.js component. We decided upon creating a handling event that, on an onClick, pushed the beer to a new array in localStorage to be mapped into the MyBeers.js page.</p>

```
```

<img src="https://i.imgur.com/JEanOVg.png" alt="Brewdog index page"/>

<h2>Future Features</h2>

<li>Create register/login functionality.</li>
<li>MyBeers component made only accessible for logged in users.</li>

<h2>Lessons Learned</h2>

<li>Whilst project 1 was an introduction to single page JavaScript, project 2 was our first experience in creating the user interface fundamentals- index and show components- through filtering and sorting arrays. </li>
<li>From this project we created our first front end React app, and gained a base knowledge of component use, AJAX requests (primarily axis), and GET requests using a public API in the client HTTP.</li>

