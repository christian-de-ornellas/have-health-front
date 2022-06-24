import { useState, useEffect, useRef } from 'react';
import { getClinic } from '../../services/clinic';
import { ClinicResponseOutput } from '../../types/global-types';

export const useHome = () => {
  const isInitialMount = useRef(true);
  const [clinics, setClinics] = useState<ClinicResponseOutput[]>([]);

  const getClinics = async (): Promise<void> => {
    try {
      const response = await getClinic();
      setClinics(response.result);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getClinics();
    }
  }, []);

  return { clinics };
};
