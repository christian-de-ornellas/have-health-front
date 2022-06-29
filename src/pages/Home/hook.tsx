import { useState, useEffect } from 'react';
import { getClinic } from '../../services/clinic';
import { ClinicResponseOutput } from '../../types/global-types';

export const useHome = () => {
  const [clinics, setClinics] = useState<ClinicResponseOutput[]>([]);

  const fetchClinics = async (): Promise<void> => {
    try {
      const response = await getClinic();
      setClinics(response.result);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  return { clinics };
};
