import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../About/Banner/aboutBanner.png';
import '../Banner/Banner.scss';
import './About.scss';
import Collapse from '../../components/Collapse/Collapse'

function About() {
  return (
    <div className="about">
      <Header />
      <div className="banner">
        <img className="aboutBanner" src={Banner} alt="banner" />
      </div>
      <Collapse />
      <Footer />
    </div>
  );
}

export default About;
