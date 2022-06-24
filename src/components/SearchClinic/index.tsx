import Button from '../Button';
import Card from '../Card';
import FormInput from '../FormInput';
import { Container } from './styles';

const SearchClinic: React.FC = (): JSX.Element => {
  return (
    <Card>
      <Container>
        <FormInput type="text" placeholder="Nome da Clínica" />
        <Button value="Buscar" />
      </Container>
    </Card>
  );
};
export default SearchClinic;
