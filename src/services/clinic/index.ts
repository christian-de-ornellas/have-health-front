import { ClinicRequestOutput } from '../../types/global-types';
import { http } from '../http';

export const createClinic = async (data: ClinicRequestOutput) => {
  try {
    const response = await http.post('/clinics', data);
    return response.status;
  } catch (error) {
    return console.error(error);
  }
};

export const getClinic = async () => {
  try {
    const response = await http.get('/clinics');
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};
