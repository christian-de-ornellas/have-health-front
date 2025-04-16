import Button from '../Button';
import Card from '../Card';
import FormInput from '../FormInput';
import { Container } from './styles';

const SearchClinic: React.FC = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flex: 4, height: '6rem' }}>
      <Card width="100%">
        <Container>
          <FormInput type="text" placeholder="Endereço" width="100%" />
          <Button value="Buscar" />
        </Container>
      </Card>
    </div>
  );
};
export default SearchClinic;
