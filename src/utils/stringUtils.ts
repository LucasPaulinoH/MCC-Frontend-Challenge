import { Country } from "@/types/Country";

export const LOADING_LABEL = "Loading...";

export const APP_LOGO = "Hello, World!";

export const getOfficialNameFromCountry = (country: Country) =>
  country.name.nativeName && Object.values(country.name.nativeName)[0]?.common;
