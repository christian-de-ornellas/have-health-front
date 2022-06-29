import { ChangeEvent, useState } from 'react';
import { createClinic } from '../../services/clinic';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

interface Suggestions {
  place_id: string;
  description: string;
}

export const useRegister = () => {
  const [name, setName] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleOnChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const handleOnChangeCnpj = (event: ChangeEvent<HTMLInputElement>): void => {
    setCnpj(event.target.value);
  };

  const handleSelect = async (address: string): Promise<void> => {
    setValue(address, false);
    clearSuggestions();
    let itemAddressComponent: google.maps.GeocoderAddressComponent[] = [];
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setLat(lat);
    setLng(lng);

    results.map((itemsOfAddress) =>
      itemsOfAddress?.address_components?.map((rows) => {
        return itemAddressComponent.push(rows);
      }),
    );

    itemAddressComponent.map((item) => {
      const types = item.types;
      const value = item.long_name;

      if (types.includes('street_number')) {
        setNumber(value);
      }

      if (types.includes('route')) {
        setPlace(value);
      }

      if (types.includes('sublocality_level_1')) {
        setNeighborhood(value);
      }

      if (types.includes('administrative_area_level_2')) {
        setCity(value);
      }
      if (types.includes('administrative_area_level_1')) {
        setState(value);
      }
      if (types.includes('country')) {
        setCountry(value);
      }
    });
  };

  const handleOnSubmit = async () => {
    try {
      const request = await createClinic({
        name,
        cnpj,
        place,
        number,
        neighborhood,
        city,
        state,
        country,
        lat,
        lng,
      });

      if (request === 201) {
        setName('');
        setCnpj('');
        setPlace('');
        setNumber('');
        setNeighborhood('');
        setCity('');
        setState('');
        setCountry('');
        setLat(0);
        setLng(0);
        setValue('');

        return request;
      }
    } catch (error) {
      return console.error(error);
    }
  };

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map(({ place_id, description }: Suggestions) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </>
    );
  };

  return {
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
  };
};
