import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Error.scss'

function Error() {
    return (
      <div>
      <Header />
      <div className="error-page">
        <h1>404</h1>
        <p className="txt-error">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

  export default Error;

  