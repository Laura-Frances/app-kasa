import React from 'react';
import Card from '../Cards/cards';
import apartment from '../Data/jsonData.json';
import '../Gallery/gallery.scss';

function Gallery() {
  return (
    <div className="gallery">
      {apartment.map((apartment) => ( // parcourt chaque élément du tableau apartment
        <Card // composant 'card' rendu pour chaque élément du tableau avec ses props:
          key={apartment.id} // extraction des valeurs de l'objet apartment dans le tableau
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
