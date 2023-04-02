import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer';
import ReturnButton from './components/ReturnButton';
import './App.css';

const App = () => {
  const [landing, setLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLanding(false)}, 2650)
  }, [])

  return (
    <div className="relative">
      {
        landing ? <LandingPage /> :
        <div className="relative">
          <Header />
          <About />
          <Timeline />
          <Projects />
          <Tech />
          <ReturnButton />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
