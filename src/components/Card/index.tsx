import { ChildrenProps } from '../../types/global-types';
import { Container } from './styles';

const Card: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
  return <Container>{children}</Container>;
};
export default Card;
