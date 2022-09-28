import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
   <>
   <nav className="header">
   <span>MoviesStreaming</span>
   <div>
   <Link to="/" >TV Shows</Link>
    <Link to="/" >Movies</Link>
    <Link to="/" >Recently Added</Link>
    <Link to="/" >My List</Link>
   </div>
   <ImSearch></ImSearch>
   </nav>
   </>
  )
}

export default Header;