import { ChildrenProps } from '../../types/global-types';
import * as Styled from './styles';

export const App: React.FC<ChildrenProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
