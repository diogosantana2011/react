import { render, fireEvent, cleanup } from '@testing-library/react';
import { Game } from '../components';
import { calculateWinner } from '../components/game';
import { expectedWinnerOutcomes } from '../utils/utils';

afterEach(cleanup);

describe('Game component', () => {
  test('renders the game board with correct initial state', () => {
    const { getAllByLabelText } = render(<Game />);
    const squares = getAllByLabelText('square');
    expect(squares).toHaveLength(9);
    expect(squares).toMatchSnapshot();
  });

  test('allows players to take turns and updates the board accordingly', () => {
    const { getAllByLabelText } = render(<Game />);
    const squares = getAllByLabelText('square');
    // Simulate player moves
    fireEvent.click(squares[0]); // Player X makes a move
    expect(squares[0]).toHaveTextContent('X');
    fireEvent.click(squares[1]); // Player O makes a move
    expect(squares[1]).toHaveTextContent('O');
    // Additional assertions for turn-taking and board updates
  });

  test('calculateWinner fnc correctly identifies winner', () => {
    // Assertions
    expect(calculateWinner(expectedWinnerOutcomes.squares1)).toBe('X');
    expect(calculateWinner(expectedWinnerOutcomes.squares2)).toBe('O');
    expect(calculateWinner(expectedWinnerOutcomes.squares3)).toBe('X');
    expect(calculateWinner(expectedWinnerOutcomes.squares4)).toBe('O');
    expect(calculateWinner(expectedWinnerOutcomes.squares5)).toBe('X');
    expect(calculateWinner(expectedWinnerOutcomes.squares6)).toBe('O');
    expect(calculateWinner(expectedWinnerOutcomes.squares7)).toBe(null); // Draw
  });

  test('Game should update currentMove and history when hitting move button', async () => {
    const { getByText, getAllByLabelText } = render(<Game />);

    const squares = getAllByLabelText('square');
    fireEvent.click(squares[0])
    expect(squares[0]).toHaveTextContent('X');
    fireEvent.click(squares[1])
    expect(squares[1]).toHaveTextContent('O');

    const moveButtons = getByText(/Go to move 1/i);
    fireEvent.click(moveButtons)
    expect(squares[1]).not.toHaveTextContent('O');

    const goToGameStart = getByText(/Go to game start/i);
    fireEvent.click(goToGameStart)
    expect(squares[0]).not.toHaveTextContent('X');
  });
});
