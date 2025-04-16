import { ChildrenProps } from '../../types/global-types';
import { Container } from './styles';

interface CardProps extends ChildrenProps {
  width: string;
}

const Card: React.FC<CardProps> = ({ width, children }): JSX.Element => {
  return <Container width={width}>{children}</Container>;
};
export default Card;
