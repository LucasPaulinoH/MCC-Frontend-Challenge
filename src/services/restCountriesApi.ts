import { Country } from "@/types/Country";
import axios from "axios";

const { get } = axios;

const restCountriesApi = {
  getAllCountries: (): Promise<Country[]> =>
    get(`${import.meta.env.VITE_REST_COUNTRIES_API_URL}/all`).then(
      (response) => response.data
    ),
};

export default restCountriesApi;
