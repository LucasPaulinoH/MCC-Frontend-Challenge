import { handleSignout } from "./functions";
import { FiLogOut } from "react-icons/fi";

const SignOutButton = () => {
  return (
    <div className="cursor-pointer" onClick={handleSignout}>
      <FiLogOut size={20}/>
    </div>
  );
};

export default SignOutButton;
