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
  complement: string | null;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  created_at: Date;
}

export interface ClinicRequestOutput {
  name: string;
  cnpj: string;
  place: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
}
