import { render, cleanup } from '@testing-library/react';
import { Profile } from '../components';
import { user } from '../utils/utils';

afterEach(cleanup);

describe('Profile component', () => {
  test('renders user profile with correct data', () => {
    const { getByAltText } = render(<Profile user={user} />);
    
    const elementRendered = getByAltText(`Displays the person ${user.name}`);
    expect(elementRendered).toBeInTheDocument();
    expect(elementRendered).toHaveAttribute('src', user.imageUrl);
    expect(elementRendered).toMatchSnapshot();
  });
});