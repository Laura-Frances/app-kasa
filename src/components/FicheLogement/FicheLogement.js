import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import apartmentData from '../Data/jsonData.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carrousel from '../Carrousel/Carrousel';
import Error from '../Error/Error';
import AnimationCollapse from '../AnimationCollapse/AnimationCollapse';
import '../FicheLogement/FicheLogement.scss';

function FicheLogement() { // declaration du composant
  const { id } = useParams(); // on extrait l'id de l'URL grace au hook
  const apartment = apartmentData.find((apartment) => apartment.id === id); // on cherche (find) l'appartement correspondant à l'id dans le tableau apartmentsData

  if (!apartment) {
    return <Error />; // page d'erreur si l'appartement ne correspond pas à l'id
  }

  return (
    <div className='FicheLogement'>
      <Header />
      <Carrousel />

      <div className='first-container'>
        <div className='titles'>
          <h2 className='title'>{apartment.title}</h2>
          <p className='location'>{apartment.location}</p>
          <div className='tags'>{apartment.tags.map((tag, index) => ( //affiche chaque tag 
          <span className='name-tag' key={index}>{tag}</span>
        ))}
        </div>
        </div>
        
        <div className='host-and-rate'>
          <div className='Host'>
            <div className='nameHost'>{apartment.host.name}</div>
            <img className='pictureHost' src={apartment.host.picture} alt='Hôte' />
          </div>

          <div className='Rate'>
            {Array.from({ length: 5 }, (_, index) => ( //génère un tableau d'étoiles en fonction de la note du logement
              <i key={index} className={`fas ${index < apartment.rating ? 'filled-star' : 'far empty-star'} fa-star`}></i>
            ))}
          </div>
        </div>

      </div> 
      
      <div className='frames'>
        <div className='barre-description'>
          <AnimationCollapse className='LogementMenu' title="Description" content={<p className='description'>{apartment.description}</p>} /> 
        </div>

        <div className='barre-equipements'>
          <AnimationCollapse className='LogementMenu' title="Equipements" content={<p className='description'>
            {apartment.equipments.map((equipment, index) => <span className='eachEquipment' key={`equipment_${index}`}>{equipment}</span>)}</p>} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FicheLogement;
