import { render, screen } from '@testing-library/react';
import Search from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<Search />', () => {
  it('should render component', () => {
    render(
      <MyThemeProvider>
        <Search />
      </MyThemeProvider>,
    );
    expect(screen).toBeDefined();
  });
});
