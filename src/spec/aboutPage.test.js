import { render, screen, cleanup } from '@testing-library/react';
import { AboutPage } from '../components';

afterEach(cleanup);

describe('AboutPage component', () => {
  test('renders about page content', () => {
    render(<AboutPage />);
    const contentElement = screen.getByText(/D'you like my smiling Pepe?/i);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toMatchSnapshot();
  });
});