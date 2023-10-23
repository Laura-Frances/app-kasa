import React from 'react';
import '../Cards/cards.scss';
import { Link } from 'react-router-dom';


function Card(props) {
  const { id, title, cover } = props; // on extrait les valeurs spécifiques des props

  return ( // contenu de la card de l'appartement
    <Link key={id} to={`/apartment/${id}`} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card; // export du composant dans le composant Gallery

