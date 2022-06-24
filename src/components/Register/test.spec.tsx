import { render, screen } from '@testing-library/react';
import Register from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<Register />', () => {
  it('should render component', () => {
    render(
      <MyThemeProvider>
        <Register />
      </MyThemeProvider>,
    );
    expect(screen).toBeDefined();
  });
});
