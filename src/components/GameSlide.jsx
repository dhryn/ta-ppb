import React from 'react'

function GameSlide({game, active, toggleVideo}) {
  return (
    <div className="gameSlider">
        <img src={game.img} alt={game.img2} />
        <div className={`video ${active ? 'active': undefined}`}>
            <iframe
                width="1920"
                height="1280"
                src={game.trailer}
                title={game.title}
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                allowFullScreen
            ></iframe>
        </div>
        <div className="gameContent">
            <h2></h2>
            <p>{game.category} - {game.publisher}</p>
            <div className="buttons">
                <a href="#" className={`playbtn ${active ? 'active': undefined}`} onClick={toggleVideo}>
                    <span className="pause">                                        
                        <i className="bi bi-pause-fill"></i>
                    </span>
                    <span className="play">
                        <i className="bi bi-play-fill"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default GameSlide