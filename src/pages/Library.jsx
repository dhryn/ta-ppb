import React from 'react'
import GameCard from '../components/GameCard'

function Library({games, reference}) {
  return (
    <section id="library" className="library" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Library</h1>
        </div>
        <div className="row">
          {
            games.length === 0 ? (
              <h2>Kosong...</h2>
            ) : (
              games.map(game=> <GameCard key={game.id} game={game}/>)
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Library