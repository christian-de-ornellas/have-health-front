import { Container } from './styles';

interface ButtonProps {
  value: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  id?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  return <Container {...props}>{props.value}</Container>;
};
export default Button;
