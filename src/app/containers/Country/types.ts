import { Country } from 'types/Country';

interface ReturnedCountry extends Country {
  code: string;
  code_iso2: string;
  code_iso3: string;
  currency_code: string;
  data_type: string;
  href: string;
}

/* --- STATE --- */
export interface CountryState {
  isLoading: boolean;
  error?: string;
  country: ReturnedCountry;
}
