import React, { useState } from 'react'
import './SideMenu.css'
import navListData from '../Data/NavListData'
import NavListItem from './NavListItem'

function SideMenu({active, sectionActive}) {
    const [navData, setNavData] = useState(navListData)

    const handleNavOnCLick = (id, target) => {
        console.log(id)
        const newNavData = navData.map(nav => {
            nav.active = false
            if (nav.id === id) nav.active = true
            return nav
        })
        setNavData(newNavData)
        sectionActive(target)
    }

  return (
    <div className={`sideMenu ${active ? 'active': undefined}`}>
        <a href="#" className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
            {navData.map(item => (
                <NavListItem
                    key={item.id}
                    item={item}
                    navOnClick={handleNavOnCLick}
                />
            ))}
        </ul>
    </div>
  )
}

export default SideMenu