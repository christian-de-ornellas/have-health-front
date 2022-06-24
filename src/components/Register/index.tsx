import { logHelper } from '../../util/LogHelper';
import Button from '../Button';
import Card from '../Card';
import FormInput from '../FormInput';
import { useRegister } from './hook';
import { FormContainer, FormGroup, Heading } from './styles';

const Register: React.FC = (): JSX.Element => {
  const { handleOnChange, handleOnSubmit, values } = useRegister();
  logHelper({ title: 'Register', data: { values } });
  return (
    <Card>
      <Heading>Cadastro de Clínicas</Heading>
      <FormContainer>
        <FormGroup>
          <FormInput
            type="text"
            name="name"
            placeholder="Nome da Clínica"
            onChange={(event) => handleOnChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            onChange={(event) => handleOnChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type="search"
            name="address"
            placeholder="Endereço"
            onChange={(event) => handleOnChange(event)}
          />
          <Button value="Buscar" />
        </FormGroup>
        <FormGroup>
          <FormInput
            type="text"
            name="lat"
            placeholder="LAT"
            onChange={(event) => handleOnChange(event)}
          />
          <FormInput
            type="text"
            name="long"
            placeholder="LONG"
            onChange={(event) => handleOnChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Button value="Cadastrar" onClick={handleOnSubmit} />
        </FormGroup>
      </FormContainer>
    </Card>
  );
};
export default Register;
