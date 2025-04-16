import { ChildrenProps } from '../../types/global-types';
import { Container } from './styles';

export const App: React.FC<ChildrenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
