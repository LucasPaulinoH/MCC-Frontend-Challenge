import { useNavigate } from "react-router-dom";
import SignOutButton from "../Button/SignOutButton";
import TextInput, { DEFAULT_INPUT_STYLES } from "../TextInput";
import useSearch from "@/hooks/useSearch";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";

interface NavbarProps {
  hideSearchBar: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { hideSearchBar } = props;

  const navigate = useNavigate();

  const { search, setSearch } = useSearch();
  const { currentUser } = FIREBASE_AUTH;

  return (
    <div className="w-full h-16 fixed top-0 gap-10 bg-black text-white flex items-center px-6 justify-between z-10">
      <h1
        className="font-bold cursor-pointer text-lg"
        onClick={() => navigate("/")}
      >
        Hello, World!
      </h1>

      {!hideSearchBar ? (
        <div className="max-w-[300px] w-full">
          <TextInput
            type="text"
            placeholder="Search a country..."
            className={DEFAULT_INPUT_STYLES.concat(
              " bg-white text-black h-full"
            )}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      ) : (
        <div className="flex-1" />
      )}

      <div className="flex items-center gap-4">
        <p className="hidden sm:flex">{currentUser?.displayName}</p>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Navbar;
