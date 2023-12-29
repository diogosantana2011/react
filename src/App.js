// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
// import MyButton from './components/button';
// import Profile  from '../src/components/profile.js';
// import AboutPage from './components/aboutPage.js';
import Square from './components/game.js';

export default function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //     setCount(count + 1)
  // };

  // return (
  //   <div className="My New Home">
  //     <header className="header">
  //     </header>
  //       <center>
  //         <Profile />
  //         <MyButton count={count} onClick={handleClick}/>
  //         <p>
  //         Diogos attempt at building a react only site, with the idea of the estate agent app showing a website.
  //         </p>
  //         <a
  //           className="MNH-link"
  //           href="https://google.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           My New Home
  //         </a>
  //         <AboutPage />
  //         </center>
  //         {/* <Game /> */}
  //   </div>
  // );

  return <Square />
}