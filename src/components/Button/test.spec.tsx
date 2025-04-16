import { render, screen } from '@testing-library/react';
import Button from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<Button />', () => {
  it('should render component', () => {
    render(
      <MyThemeProvider>
        <Button value="Save" />
      </MyThemeProvider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
