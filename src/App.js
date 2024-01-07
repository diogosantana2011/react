// import logo from './logo.svg';
import { useState } from 'react';
import MyButton from './components/button';
import Profile  from '../src/components/profile.js';
import AboutPage from './components/aboutPage.js';
import Game from './components/game.js';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
      setCount(count + 1)
  };
  return (
    <div className="My New Home">
      <header className="header">
      </header>
        <center>
          <Profile />
          <MyButton count={count} onClick={handleClick}/>
          <p>
            Diogos attempt at building a react only site, with the idea of the estate agent app showing a website.
            While I'm learning how to implement above idea, I built few random components.
          </p>
          {/* <a
            className="MNH-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            My New Home
          </a> */}
          <AboutPage />
          </center>
          <Game />
    </div>
  );
}