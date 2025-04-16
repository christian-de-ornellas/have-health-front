import { Input } from './styles';
import { ChangeEvent } from 'react';
interface FormInputProps {
  type:
    | 'text'
    | 'search'
    | 'password'
    | 'number'
    | 'tel'
    | 'date'
    | 'color'
    | 'checkbox';
  value?: string | number;
  name?: string;
  id?: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  textAlign?: string;
  disabled?: boolean;
}
const FormInput: React.FC<FormInputProps> = (props): JSX.Element => {
  return <Input {...props} />;
};
export default FormInput;
