import React from 'react'
import './Header.css'

function Header({toggleActive}) {
  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
            <i className="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i className="bi bi-heart-fill"></i>
                <span className="like">0</span>
            </a>
            <a href="#" className="icon">
                <i className="bi bi-bag-fill"></i>
                <span className="bag">0</span>
            </a>
            <a href="" className="icon">
                <i className="bi bi-person-fill"></i>
                <span className="profile"></span>
            </a>
        </div>
    </header>
  )
}

export default Header