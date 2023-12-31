import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Game, { Square } from './components/game';
import MyButton from './components/button';
import Profile  from '../src/components/profile.js';
import AboutPage from './components/aboutPage.js';
import { user } from './utils/utils.js';

afterEach(cleanup);

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
    const linkElement = screen.getByAltText(`Displays the person ${user.name}`);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders AboutPage component', () => {
    render(<AboutPage />);
    const linkElement = screen.getByText(/D'you like my smiling Pepe?/i);
    expect(linkElement).toBeInTheDocument();
  });
});

/**
 * Add test to component functionality
 * game.js file
 */

describe('Component functional tests', () => {
  test('WHEN <Button /> renders, its clickable', () => {
    const handleClick = jest.fn();
    const {getByText, asFragment} = render(<MyButton onClick={handleClick}/>);
    fireEvent.click(screen.getByText(/I'm a button/i));
    const firstRender = asFragment();
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(getByText(/I'm a button/)).toBeInTheDocument();
    expect(firstRender).toMatchSnapshot();
  });

  test('WHEN <Square /> renders, its clickable', () => {
    const handleClick = jest.fn();
    const {getByLabelText, asFragment} = render(<Square onClick={handleClick(0)} />);
    const firstRender = asFragment();
    const element = getByLabelText('square');
    fireEvent.click(element, {name: 'X'});
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(firstRender).toMatchSnapshot();
  });
});