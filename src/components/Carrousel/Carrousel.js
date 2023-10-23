
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import apartmentData from '../Data/jsonData.json';
import Error from '../Error/Error';
import '../Carrousel/Carrousel.scss';

function Carrousel() {
  const { id } = useParams(); // on extrait la valeur de l'URL correspondant au paramètre id
  const apartment = apartmentData.find((apartment) => apartment.id === id); // on recherche l'appartement correspondant à l'ID extrait de l'URL avec 'find'
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // état initialisé à 0 // setCurrentImageIndex met à jour la valeur de currentImageIndex

  if (!apartment) {
    return <Error /> // page d'erreur 404 renvoyée
  }

  const totalImages = apartment.pictures.length; // calcule le nombre d'img pour l'appartement
  
  const handleNextImage = () => { // fonction est appelée lors du clic sur la flèche suivante
    setCurrentImageIndex((index) => (index + 1) % totalImages); // incrémentation +1, et on revient à 0 si on dépasse le totalImages
  };

  const handlePrevImage = () => { // fonction est appelée lors du clic sur la flèche précédente
    setCurrentImageIndex((index) =>
      index === 0 ? totalImages - 1 : index - 1 // décrémentation -1
    );
  };

  const showNavigation = apartment.pictures.length > 1; // affiche les flèches de navigation seulement s'il y a + d'une image

  return (
    <div>
      <div className="carrousel">
        <div className="carrousel-image-container">
          <img
            className="carrousel-image"
            src={apartment.pictures[currentImageIndex]} // affiche l'image actuelle
            alt={`Image ${currentImageIndex}`}
          />
          <div className="navigation">
          {showNavigation && ( // s'il y a +1 image dans l'appartement, on lit la suite du code ... 
            <div
              className="carrousel-navigation arrow-left">
              <i className="fas fa-chevron-left" // déclenchement des fonctions de clic pour l'img précédente:
                onClick={handlePrevImage}></i>
            </div>
          )}
            {showNavigation && (
            <div
              className="carrousel-navigation arrow-right">
              <i className="fas fa-chevron-right" // déclenchement des fonctions de clic pour l'img suivante:
                onClick={handleNextImage}></i>
            </div>
            )}
          </div>

          {apartment.pictures.length > 1 && ( // s'il y a +1 image dans l'appartement, on lit la suite du code ... 
            <div className='numbering'>
              <div className="number">
                {`${currentImageIndex + 1}/${apartment.pictures.length}`}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
