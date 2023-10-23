import React, { useState } from 'react';
import './AnimationCollapse.scss';

const AnimationCollapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // variable d'état isOpen initialisée à false
  const [isClosing, setIsClosing] = useState(false); // variable d'état isClosing initialisée à false

  const handleItemClick = () => {
    if (isOpen) {
      setIsClosing(true);
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
        }, 200);
      });
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  return (
    <div className='menu-collapse'>
      <div className={`scrollingMenu ${isOpen ? 'active' : ''}`}>
        {title}
        <i
          className={`arrow fas ${isOpen ? (isClosing ? 'fa-chevron-up rotate-animation-reverse' : 'fa-chevron-up rotate-animation') : 'fa-chevron-down'}`}
          onClick={handleItemClick}
        />
      </div>
      {isOpen && (
        <div className={`menu-content ${isClosing ? 'collapse-animation' : 'scroll-animation'}`}>
          {content}
        </div>
      )}
    </div>
  );
  
};

export default AnimationCollapse;
