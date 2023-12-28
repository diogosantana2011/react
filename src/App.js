// import logo from './logo.svg';
import './App.css';
import { MyButton } from './components/button';
import Profile from '../src/components/profile';

function App() {
  return (
    <div className="My New Home">
      <header className="header">
        <MyButton />
        <Profile />
        <center>
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
          </center>
      </header>
    </div>
  );
}

export default App;