import Button from "@/components/Button";
import { DEFAULT_ICON_SIZE, LoggedContainer } from "@/styles/shared";
import { Country } from "@/types/Country";
import { getOfficialNameFromCountry } from "@/utils/stringUtils";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const navigate = useNavigate();

  const country: Country = JSON.parse(localStorage.getItem("selectedCountry")!);

  const officialName = getOfficialNameFromCountry(country);

  return (
    <LoggedContainer hideSearchBar>
      <div
        className="cursor-pointer absolute p-2 self-start left-0 top-16"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft size={DEFAULT_ICON_SIZE} />
      </div>

      <div className="flex flex-col justify-between w-full h-full gap-5">
        <img
          src={country.flags.png}
          alt={`${country} flag`}
          loading="lazy"
          className="h-auto max-h-[350px] w-full sm:w-full object-contain"
        />

        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-center text-lg">
            {country.name.common}{" "}
            {officialName !== country.name.common && ` (${officialName})`}
          </h1>

          <Button
            label="Visit on Google Maps"
            onClick={() => window.open(country.maps.googleMaps, "_blank")}
            icon={<FaMapMarkerAlt />}
          />
        </div>

        <div className="h-full w-full flex flex-col gap-2 ">
          <p className="font-semibold">
            Capital:{" "}
            <span className="font-normal">{country.capital?.join(", ")}</span>
          </p>

          <p className="font-semibold">
            Language:{" "}
            <span className="font-normal">
              {country.languages && Object.values(country.languages).join(", ")}
            </span>
          </p>

          <p className="font-semibold">
            Continent: <span className="font-normal">{country.region} </span>
          </p>

          <p className="font-semibold">
            Currency:{" "}
            <span className="font-normal">
              {country.currencies &&
                Object.keys(country.currencies)
                  .map(
                    (key) =>
                      `${country.currencies[key].name} (${country.currencies[key].symbol})`
                  )
                  .join(", ")}
            </span>
          </p>

          <p className="font-semibold">
            Area:{" "}
            <span className="font-normal">
              {`${country.area.toLocaleString("en-US")} km²`}
            </span>
          </p>

          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal">
              {`${country.population.toLocaleString("en-US")} inhabitants`}
            </span>
          </p>

          <p className="font-semibold">
            Timezones:{" "}
            <span className="font-normal">{country.timezones.join(", ")} </span>
          </p>
        </div>
      </div>
    </LoggedContainer>
  );
};

export default CountryDetails;
