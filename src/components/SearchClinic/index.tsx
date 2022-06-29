import Button from '../Button';
import Card from '../Card';
import FormInput from '../FormInput';
import { Container } from './styles';

const SearchClinic: React.FC = (): JSX.Element => {
  return (
    <div style={{ width: '84%' }}>
      <Card width="80%">
        <Container>
          <FormInput type="text" placeholder="Nome da Clínica" width="100%" />
          <Button value="Buscar" />
        </Container>
      </Card>
    </div>
  );
};
export default SearchClinic;
