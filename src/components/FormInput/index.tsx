import { Input } from './styles';

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
  onChange?: (event: { target: { value: string | number } }) => void;
}
const FormInput: React.FC<FormInputProps> = (props): JSX.Element => {
  return <Input {...props} />;
};
export default FormInput;
