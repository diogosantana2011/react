// import logo from './logo.svg';
import { useState } from 'react';
import { MyButton, Profile, AboutPage, Game, FilterableProductTable } from './components';
import { products } from './utils/utils';
import './styles/App.css';
import './styles/productTable.css';

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
          <AboutPage />
          </center>
          <Game />
          <center>
            <FilterableProductTable products={products} />
          </center> 
    </div>
  );
}