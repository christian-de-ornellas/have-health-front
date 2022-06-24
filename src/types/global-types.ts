export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ClinicResponseOutput {
  id: number;
  name: string;
  cnpj: string;
  place: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  long: number;
  created_at: Date;
}

export interface ClinicRequestOutput {
  name: string;
  cnpj: string;
  place: string;
  number: number;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  long: number;
}
