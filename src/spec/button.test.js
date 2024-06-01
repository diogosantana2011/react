import { render, fireEvent, cleanup } from '@testing-library/react';
import { MyButton } from '../components';

afterEach(cleanup);

describe('MyButton component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<MyButton />);
    const buttonElement = getByText(/I'm a button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot(); 
  });

  test('button is clickable', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<MyButton onClick={handleClick} />);
    const buttonElement = getByText(/I'm a button/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttonElement).toMatchSnapshot(); 
  });
});