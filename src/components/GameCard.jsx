import React from 'react'
import './GameCard.css'

function GameCard({game}) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4">
      <img src={game.img} alt={game.img2} className="img-fluid" />
      <a href="#">
        <i className="bi bi-heart-fill"></i>
      </a>
      <div className="gameFeature">
        
      </div>
    </div>
  )
}

export default GameCard