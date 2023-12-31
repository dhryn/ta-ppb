import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'
import { AppContext } from '../App'

const GameCard = ({ game }) => {
  const { library, setLibrary } = useContext(AppContext)

  const handleAddToLibrary = () => {
    setLibrary([...library, game])
  }

  const handleRemoveFromLibrary = () => {
    setLibrary(library.filter((item) => item.id !== game.id))
  }

  return (
    <div className="col-xl-3 col-lg-4 col-md-4">
      <div className="gameCard">
        <Link to={`/detail/${game.id}`}>
          <img src={game.img} alt={game.title} className="img-fluid" />
        </Link>
        <a
          href="#"
          className={`like ${library.includes(game) ? 'active' : undefined}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
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
