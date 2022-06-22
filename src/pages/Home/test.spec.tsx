import { render, screen } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('should render component', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'Oi eu sou a home' }),
    ).toMatchSnapshot();
  });
});
