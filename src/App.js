import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
    <nav>
      <img src={logo} alt="logo" />
      <ul className="nav-items>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </header>
  )
}
function MainContent() {
  return (
    
  )
}

function Footer() {
  return (
    
  )
}
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
