import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import Card from '../components/Cards/cards';
import FicheLogement from '../components/FicheLogement/FicheLogement';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/" component={Card} />
      <Route path="/apartment/:id" element={<FicheLogement />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
