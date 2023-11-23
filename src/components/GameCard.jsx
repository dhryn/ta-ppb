import React from 'react'
import './GameCard.css'

function GameCard({game}) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4">
      <div className="gameCard">
        <img src={game.img} alt={game.img2} className="img-fluid" />
        <a href="#" className='like'>
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="gameFeature">
          <div className="gameTitle">{game.title}</div>
        </div>
        <div className="gameCategory at-4 mb-3">
          {game.category} - {game.year}
        </div>
      </div>
    </div>
  )
}

export default GameCard