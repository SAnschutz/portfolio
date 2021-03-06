import React, { useState, createRef } from 'react';
import AboutScreen from './AboutScreen';
import ProjectsScreen from './ProjectsScreen';
import ContactScreen from './ContactScreen';

export default function LandingPage() {
  const [currentScreen, setCurrentScreen] = useState('About');
  const scrollToPosition = createRef();

  return (
    <div className='landing-page' style={{ height: '2px' }}>
      <div className='scrollToDiv' ref={scrollToPosition}></div>
      <div
        onClick={() => setCurrentScreen('About')}
        className={
          currentScreen === 'About'
            ? 'current-screen about-div content-slide'
            : 'about-div link'
        }
      >
        {currentScreen === 'About' ? (
          <AboutScreen />
        ) : (
          <h3 className='link-label'>About</h3>
        )}
      </div>
      <div
        onClick={() => {
          setCurrentScreen('Projects');
          // scrollToPosition.current.scrollTop(0);

          scrollToPosition.current.scrollTo({ top: 0, left: 0 });
        }}
        className={
          currentScreen === 'Projects'
            ? 'current-screen projects-div content-slide'
            : 'projects-div link'
        }
      >
        {currentScreen === 'Projects' ? (
          <ProjectsScreen />
        ) : (
          <h3 className='link-label'>Projects</h3>
        )}
      </div>
      <div
        onClick={() => setCurrentScreen('Contact')}
        className={
          currentScreen === 'Contact'
            ? 'current-screen contact-div content-slide'
            : 'contact-div link'
        }
      >
        {currentScreen === 'Contact' ? (
          <ContactScreen />
        ) : (
          <h3 className='link-label'>Contact</h3>
        )}
      </div>
    </div>
  );
}
