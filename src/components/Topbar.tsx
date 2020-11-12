import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Topbar.scss';


const  Topbar = (): any => {

  const history = useHistory()

  const navigateHome = () => {
    history.push('/');
  }

  return (
    <div className='topbar'>
      <button onClick={navigateHome}>Home</button>
      <h1>Web Dev Ninja</h1>
    </div>
  )
}

export default Topbar;