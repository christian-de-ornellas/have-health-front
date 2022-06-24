import { useState } from 'react';
import { createClinic } from '../../services/clinic';
export const useRegister = () => {
  const [values, setValues] = useState<any>({});

  const handleOnChange = (event: any): void => {
    setValues({ ...values, [event.target.name]: event?.target.value });
  };

  const handleOnSubmit = async () => {
    try {
      const request = await createClinic(values);
      return request;
    } catch (error) {
      return console.error(error);
    }
  };

  return { handleOnChange, handleOnSubmit, values };
};
