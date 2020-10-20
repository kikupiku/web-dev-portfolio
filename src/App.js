import React, { useState } from 'react';
import styles from './App.module.css';
import Main from './components/main/main';
import About from './components/about/about';
import Menu from './components/menu/menu';
import MobileMenu from './components/mobileMenu/mobileMenu';
import Skills from './components/skills/skills';
import Projects from './containers/projects/projects';
import WhenIDontCode from './components/widwidc/widwidc';
import Contact from './components/contact/contact';

const App = () => {
  const [mode, setMode] = useState('light');
  const [mobileMenu, setMobileMenu] = useState('closed');

  const toggleModeHandler = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  const mobileMenuHandler = () => {
    mobileMenu === 'closed' ? setMobileMenu('open') : setMobileMenu('closed');
  }

  return (
    <div mode={mode} className={styles.App + ' background'}>
      <Menu
        toggleMode={toggleModeHandler}
        toggleMenu={mobileMenuHandler}
        mode={mode}
      />
      <MobileMenu toggleMenu={mobileMenuHandler} mode={mode} />
      <Main mode={mode} />
      <About mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <WhenIDontCode mode={mode} />
      <Contact mode={mode} />
    </div>
  );
}

export default App;
