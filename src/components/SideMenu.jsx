import React, { useState } from 'react'
import './SideMenu.css'
import navListData from '../Data/NavListData'
import NavListItem from './NavListItem'
import socialListData from '../Data/SocialListData'
import SocialListItem from './SocialListItem'

function SideMenu({active}) {
    const [navData, setNavData] = useState(navListData)
    const [socialData, setSocialData] = useState(socialListData)

  return (
    <div className={`sideMenu ${active ? 'active': undefined}`}>
        <a href="" className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
            {navData.map(item => (
                <NavListItem key={item.id} item={item}/>
            ))}
        </ul>
        <ul className="social">
            {socialData.map(item => (
                <SocialListItem key={item.id} item={item}/>
            ))}
        </ul>
    </div>
  )
}

export default SideMenu