import React from 'react';
import { Link } from 'react-router-dom'

// => Css
import './style.css'

// => Images
import Logo from '../../assets/images/logo.svg'
import LandingLogo from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeart from '../../assets/images/icons/purple-heart.svg'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="logo-container">
          <img src={Logo} alt="Proffy" />
          <h2>Sua plataforma de estudo online</h2>
        </div>

        <img src={LandingLogo} alt="Landing" className="hero-image" />

        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={StudyIcon} alt="Study" />
            Estudar
          </Link>
          <Link to="give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Give Classes" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={PurpleHeart} alt="Coração Roxo" />
        </span>

      </div>
    </div>
  );
}

export default Landing;