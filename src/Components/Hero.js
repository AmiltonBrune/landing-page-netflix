import React from "react";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <div
      id="hero"
      className="Hero"
      style={{
        backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"
      }}
    >
      <div className="content">
        <img
          className="logo"
          src="http://www.returndates.com/backgrounds/narcos.logo.png"
          alt="narcos background"
        />
        <h2>3ª temporada já está disponível</h2>
        <p>
          A notória série sobre o tráfico é baseada na história real de
          violência e poder dos cartéis colombianos.
        </p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Assitir agora" />
          <HeroButton primary={false} text="+ Minha lista" />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
