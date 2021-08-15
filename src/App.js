import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Foods from './components/Foods/Foods';

const App = () => {
  return (
    <>
      <Header />
      <Foods />
      <About />
      <Footer />
    </>
  );
};

export default App;