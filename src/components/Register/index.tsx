import Button from '../Button';
import Card from '../Card';
import FormInput from '../FormInput';
import { useRegister } from './hook';
import { Container, Form, Heading } from './styles';
import { logHelper } from '../../util/LogHelper';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const Register: React.FC = (): JSX.Element => {
  const {
    handleOnSubmit,
    handleInput,
    handleSelect,
    renderSuggestions,
    handleOnChangeName,
    handleOnChangeCnpj,
    ready,
    value,
    status,
    lat,
    lng,
    name,
    cnpj,
    place,
    number,
    neighborhood,
    city,
    state,
    country,
  } = useRegister();

  logHelper({
    title: 'Register',
    data: {
      lat,
      lng,
      name,
      cnpj,
      place,
      number,
      neighborhood,
      city,
      state,
      country,
    },
  });

  return (
    <Container>
      <Card width="100%">
        <Heading>Cadastro de Clínicas</Heading>
        <Form>
          <FormInput
            type="text"
            name="name"
            placeholder="Nome da Clínica"
            onChange={handleOnChangeName}
            value={name}
          />

          <FormInput
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            onChange={handleOnChangeCnpj}
            value={cnpj}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Combobox
              onSelect={handleSelect}
              aria-labelledby="autocomplete-places"
              style={{
                width: '100%',
                margin: '1rem 0.5rem',
              }}
            >
              <ComboboxInput
                type="search"
                style={{
                  padding: '0.5rem',
                  border: 'none',
                  outline: 'none',
                  borderBottom: '0.1rem solid black',
                  width: '100%',
                }}
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Endereço"
              />

              <ComboboxPopover style={{ position: 'absolute', zIndex: 999 }}>
                <ComboboxList>
                  {status === 'OK' && renderSuggestions()}
                </ComboboxList>
              </ComboboxPopover>
            </Combobox>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormInput
              type="text"
              name="lat"
              placeholder="LAT"
              width="25%"
              textAlign="center"
              disabled
              value={lat}
            />
            <FormInput
              type="text"
              name="long"
              placeholder="LONG"
              width="25%"
              textAlign="center"
              disabled
              value={lng}
            />
          </div>

          <Button value="Cadastrar" onClick={handleOnSubmit} />
        </Form>
      </Card>
    </Container>
  );
};
export default Register;
