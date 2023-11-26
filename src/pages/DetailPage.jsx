import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import { AppContext } from '../App';

const DetailPage = () => {
  const { games } = useContext(AppContext);
  const { id } = useParams();

  const game = games.find((game) => game.id === parseInt(id, 10));

  if (!game) {
    return (
      <div className="detailContainer">
        <p>Game not found</p>
      </div>
    );
  }

  return (
    <div className="detailContent">
      <div className="detailContainer">
        <h1>{game.title}</h1>
        <div className="imgContainer">
          <img src={game.img} alt="" className='detailImg' />
        </div>
        <p>{game.category}</p>
        <p>{game.publisher}</p>
        <p>{game.platform}</p>
        <p>{game.year}</p>
      </div>
    </div>
  );
};

export default DetailPage;
