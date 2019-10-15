import React from 'react';
import LandingPage from './components/LandingPage';
import { createBrowserHistory } from 'history';

import './styles/styles.scss';
export const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <LandingPage />
    </div>
  );
}

export default App;
