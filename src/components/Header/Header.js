import React from 'react';
import './Header.scss';
import { useState, useEffect } from 'react';
import { Link,  useLocation } from 'react-router-dom';
import logo from './images/logo.png';


function Header() {
  const location = useLocation(); // on récupère la localisation de l'URL active
  const [activePage, setActivePage] = useState(''); // variable d'état utilisée pour suivre la page active et pour la mettre à jour

  useEffect(() => { // effectue une action lorsque l'URL change
    setActivePage(location.pathname); // met à jour l'état activePage avec le chemin de la page active
  }, [location]); // effet déclenché chaque fois que la valeur de 'location' change

  return (
    <div className="header">
      <img src={logo} alt="logo-kasa" className='header-logo '/>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/" className={activePage === '/' ? 'active' : ''}>Accueil</Link> {/* ajoute dynamiquement la classe "active" si activePage correspond à l'URL.*/}
          </li>
          <li>
            <Link to="/about" className={activePage === '/about' ? 'active' : ''}>À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;