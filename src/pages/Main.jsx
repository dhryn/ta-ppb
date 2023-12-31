import React, { useEffect, useState, useRef, useContext } from 'react';
import { AppContext } from '../App';
import './Main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import Library from './Library';
import Profile from './Profile';

const Main = () => {
  const { library } = useContext(AppContext)
  const [active, setActive] = useState(false)
  const [games, setGames] = useState([])

  const homeRef = useRef()
  const categoriesRef = useRef()
  const libraryRef = useRef()
  const profileRef = useRef()

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false
    },
    {
      name: 'profile',
      ref: profileRef,
      active: false
    }
  ]

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove('active');
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch('https://my-json-server.typicode.com/dhryn/ta-ppb/games')
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`container ${active ? 'active' : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <Library games={library} reference={libraryRef} />
              <Profile reference={profileRef} />
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main
