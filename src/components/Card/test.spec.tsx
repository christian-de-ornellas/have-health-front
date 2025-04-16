import { render, screen } from '@testing-library/react';
import Card from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<Card />', () => {
  it('should render component', () => {
    render(
      <MyThemeProvider>
        <Card width="100%">
          <>
            <h1>Eu sou o card</h1>
          </>
        </Card>
      </MyThemeProvider>,
    );
    expect(
      screen.getByRole('heading', { name: 'Eu sou o card' }),
    ).toBeInTheDocument();
  });
});
