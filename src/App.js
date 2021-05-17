import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'


import Navbar from './components/Navbar'
import Home from './components/Home'
import BeerIndex from './components/BeerIndex'
import ShowBeer from './components/ShowBeer'
import About from './components/About'
import MyBeers from './components/MyBeers'

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

export default App
