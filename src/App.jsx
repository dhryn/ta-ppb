import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Main from './pages/Main';
import DetailPage from "./pages/DetailPage";

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/gamesData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch games data");
        }

        const gamesData = await response.json();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };

    fetchGamesData();
  }, []);

  return (
    <AppContext.Provider value={{ library, setLibrary, games }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
