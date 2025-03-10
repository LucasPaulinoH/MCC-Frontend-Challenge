import { Country } from "@/types/Country";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

const CountryCard = (props: CountryCardProps) => {
  const navigate = useNavigate();
  const { country } = props;

  const officialName =
    country.name.nativeName &&
    Object.values(country.name.nativeName)[0]?.common;

  return (
    <div
      className="cursor-pointer max-w-[320px] hover:scale-[1.1] transition-all flex flex-col gap-3"
      onClick={() =>
        navigate(`/countries/details?country=${country.name.common}`)
      }
    >
      <img
        src={country.flags.png}
        alt={`${country} flag`}
        loading="lazy"
        className="max-w-full h-auto max-h-[200px] object-contain"
      />

      <h1 className="font-bold">
        {country.name.common}
        {officialName && ` (${officialName})`}
      </h1>

      <div>
        <p className="font-semibold">
          Capital:{" "}
          <span className="font-normal">{country.capital?.join(", ")}</span>
        </p>

        <p className="font-semibold">
          Continent: <span className="font-normal">{country.region} </span>
        </p>

        <p className="font-semibold">
          Language:{" "}
          <span className="font-normal">
            {country.languages && Object.values(country.languages).join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
