import React from 'react';

export default function Header() {
  return (
    <header className="App">
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      <h3 className="nav-h3">ReactFacts</h3>
      <h4 className="nav-h4">by JAY</>
    </nav>
    </header>
  )
}
