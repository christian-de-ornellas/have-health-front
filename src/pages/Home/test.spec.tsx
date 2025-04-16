import { render, screen } from '@testing-library/react';
import Home from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<Home />', () => {
  it('should render component', () => {
    render(
      <MyThemeProvider>
        <Home />
      </MyThemeProvider>,
    );
    expect(screen).toBeDefined();
  });
});
