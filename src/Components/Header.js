import React from 'react';
import illustration from '../images/illustration-hero.svg'

const header = () => {
  return (
    <div>
        <header className="App-header">
        <img src={illustration} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default header