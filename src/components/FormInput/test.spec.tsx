import { render, screen } from '@testing-library/react';
import FormInput from '.';
import { MyThemeProvider } from '../../styles/MyThemeProvider';

describe('<FormInput />', () => {
  it('should render component', async () => {
    render(
      <MyThemeProvider>
        <FormInput type="text" name="text" placeholder="My Input" />
      </MyThemeProvider>,
    );
    const inputTextMount = await screen.findAllByPlaceholderText('My Input');
    expect(inputTextMount).toBeDefined();
  });
});
