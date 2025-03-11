import { useNavigate } from "react-router-dom";
import SignOutButton from "../Button/SignOutButton";
import TextInput, { DEFAULT_INPUT_STYLES } from "../TextInput";
import useSearch from "@/hooks/useSearch";
import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import { APP_LOGO } from "@/utils/stringUtils";

interface NavbarProps {
  hideSearchBar: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { hideSearchBar } = props;

  const navigate = useNavigate();

  const { search, setSearch } = useSearch();
  const { currentUser } = FIREBASE_AUTH;

  return (
    <div className="w-full h-16 fixed top-0 gap-10 bg-default-color flex items-center px-6 justify-between z-10">
      <h1
        className="font-bold cursor-pointer text-lg"
        onClick={() => navigate("/")}
      >
        {APP_LOGO}
      </h1>

      {!hideSearchBar ? (
        <div className="w-full max-w-[400px]">
          <TextInput
            type="text"
            placeholder="Search a country..."
            className={DEFAULT_INPUT_STYLES.concat(
              " h-full text-default-color bg-default-color"
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
