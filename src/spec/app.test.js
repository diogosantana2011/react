import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

test('renders profile component', () => {
  render(<App />);
  const profileElement = screen.getByAltText(/Displays the person/i);
  expect(profileElement).toBeInTheDocument();
  expect(profileElement).toMatchSnapshot();
});

test('renders MyButton component', () => {
  render(<App />);
  const buttonElement = screen.getByText(/I'm a button/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toMatchSnapshot(); 
});

test('renders AboutPage component', () => {
  render(<App />);
  const aboutPageElement = screen.getByText(/D'you like my smiling Pepe?/i);
  expect(aboutPageElement).toBeInTheDocument();
  expect(aboutPageElement).toMatchSnapshot();
});

test('renders Game component', () => {
  render(<App />);
  const gameElement = screen.getByText(/Next player:/i);
  expect(gameElement).toBeInTheDocument();
  expect(gameElement).toMatchSnapshot();
});

test('renders FilterableProductTable component', () => {
  render(<App />);
  const productTableElement = screen.getByText(/Show Product Table/i);
  expect(productTableElement).toBeInTheDocument();
  expect(productTableElement).toMatchSnapshot();
});