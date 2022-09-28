import React from 'react'
import './App.scss'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header'
const App = () => {
return (
<>
<Router>
<Header></Header>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
</Routes>
</Router>
</>
  )
}

export default App;