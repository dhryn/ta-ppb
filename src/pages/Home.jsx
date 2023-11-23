import React from 'react'
import './Home.css'
import GameCard from '../components/GameCard'
import GameSwiper from '../components/GameSwiper'

function Home({games, reference}) {
  return (
    <section className="home active" id="home" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games}/>
        </div>
        <div className="row mb-4 mt-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Popular Games</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore">
              View More Games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {games.slice(0,4).map(game => (
            <GameCard key={game.id} game={game}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home