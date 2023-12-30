import { render, screen } from '@testing-library/react';
import App from './App';
import Game from './components/game';
import MyButton from './components/button';
import Profile  from '../src/components/profile.js';
import AboutPage from './components/aboutPage.js';

describe('Component rendering tests', () => {
  it('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Diogo Santana/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('renders Game component', () => {
    render(<Game />);
    const linkElement = screen.getByText(/Next player:/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders My button component', () => {
    render(<MyButton />);
    const linkElement = screen.getByText(/I'm a button/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders Profile component', () => {
    render(<Profile />);
    const linkElement = screen.getByText(/Diogo Santana/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders AboutPage component', () => {
    render(<AboutPage />);
    const linkElement = screen.getByText(/D'you like my smiling Pepe?/i);
    expect(linkElement).toBeInTheDocument();
  });
});
