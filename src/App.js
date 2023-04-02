import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [landing, setLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {setLanding(false)}, 2650)
  }, [])

  return (
    <div className="App">
      {
        landing ? <LandingPage /> :
        <div>
          <Header />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
