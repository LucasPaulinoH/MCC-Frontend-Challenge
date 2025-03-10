export type Country = {
  flags: { png: string };
  name: {
    common: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  capital: string[];
  region: string;
  languages: Record<string, string>;
  area: number;
  population: number;
  maps: { googleMaps: string };
  timezones: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  coatOfArms: { png: string; svg: string };
};
