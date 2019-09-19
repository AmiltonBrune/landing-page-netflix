import React, { useState } from "react";
import Logo from "./Assets/Logo";
import TitleList from "./Components/TitleList/TitleList";
import Navigation from "./Components/Navigation";
import UserProfile from "./Components/UserProfile";
import Hero from "./Components/Hero";

import "./Styles/app.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  function handleKeyUp(e) {
    if (e.key === "Enter" && searchTerm !== "") {
      let searchUrl =
        "search/multi?query=" +
        searchTerm +
        "&api_key=" +
        process.env.REACT_APP_APIKEY +
        "&language=pt-BR";
      setSearchUrl(searchUrl);
    }
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <header className="Header">
        <Logo />
        <Navigation />
        <div id="search" className="Search">
          <input
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            type="search"
            placeholder="Buscar pelo nome..."
            value={searchTerm}
          />
        </div>
        <UserProfile />
      </header>
      <Hero />
      <TitleList title="Resultados da busca" url={searchUrl} />
      <TitleList
        title="Séries indicadas para Amilton"
        url="discover/tv?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Últimas tendências"
        url="discover/movie?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Filmes de terror mais assitidos"
        url="genre/27/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Mais vistos em ficção científica"
        url="genre/878/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Comédias"
        url="genre/35/movies?sort_by=popularity.desc&page=1"
      />
    </div>
  );
}
