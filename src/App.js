import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="My New Home">
      <header className="header">
        <img src={logo} className="MNH-logo" alt="logo" />
        <p>
         Diogos attempt at building a react only site.
        </p>
        <a
          className="MNH-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My New Home
        </a>
      </header>
    </div>
  );
}

export default App;
