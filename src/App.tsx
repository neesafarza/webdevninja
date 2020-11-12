import React from 'react';
import './styles/App.scss';
import CardsCollection from './components/CardsCollection';
import Topbar from './components/Topbar' 
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
