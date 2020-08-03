import React from 'react';

// => Images
import Logo from '../../assets/images/logo.svg'
import LandingLogo from '../../assets/images/landing.svg'
import StudyIcon from '../../assets/images/icons/study.svg'

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
          <a href="#" className="study">
            <img src={StudyIcon} alt="Study" />
            Estudar
          </a>
        </div>

      </div>
    </div>
  );
}

export default Landing;