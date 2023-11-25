import React, {useContext} from 'react'
import './Header.css'
import {AppContext} from '../App'

function Header({toggleActive}) {
    const {library} = useContext(AppContext)

  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
            <i className="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i className="bi bi-heart-fill"></i>
                <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
                <i className="bi bi-person-fill"></i>
                <span className="profile"></span>
            </a>
        </div>
    </header>
  )
}

export default Header