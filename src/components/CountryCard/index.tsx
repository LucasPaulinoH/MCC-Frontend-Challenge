import { Country } from "@/types/Country";
import { getOfficialNameFromCountry } from "@/utils/stringUtils";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

const CountryCard = (props: CountryCardProps) => {
  const navigate = useNavigate();
  const { country } = props;

  const officialName = getOfficialNameFromCountry(country);

  const handleClick = () => {
    localStorage.setItem("selectedCountry", JSON.stringify(country));
    navigate(`/countries/details?country=${country.name.common}`);
  };

  return (
    <div
      className="cursor-pointer max-w-[320px] hover:scale-[1.1] transition-all flex flex-col gap-3 text-justify"
      onClick={handleClick}
    >
      <img
        src={country.flags.png}
        alt={`${country} flag`}
        loading="lazy"
        className="max-w-full h-auto max-h-[200px] object-contain"
      />

      <h1 className="font-bold">
        {country.name.common}
        {officialName !== country.name.common && ` (${officialName})`}
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
