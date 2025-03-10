import { useNavigate } from "react-router-dom";
import SignOutButton from "../Button/SignOutButton";
import TextInput, { DEFAULT_INPUT_STYLES } from "../TextInput";
import useSearch from "@/hooks/useSearch";

const Navbar = () => {
  const navigate = useNavigate();

  const { search, setSearch } = useSearch();

  return (
    <div className="w-full h-16 fixed top-0 gap-10 bg-black text-white flex items-center px-6 justify-between z-10">
      <h1
        className="font-bold cursor-pointer text-lg"
        onClick={() => navigate("/")}
      >
        Hello, World!
      </h1>

      <TextInput
        type="text"
        placeholder="Search a country..."
        className={DEFAULT_INPUT_STYLES.concat(
          " bg-white text-black h-full max-w-[400px]"
        )}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SignOutButton />
    </div>
  );
};

export default Navbar;
