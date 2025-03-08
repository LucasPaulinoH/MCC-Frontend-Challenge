import { handleSignout } from "./functions";

const SignOutButton = () => {
  return (
    <button className="cursor-pointer" onClick={handleSignout}>
      Sair
    </button>
  );
};

export default SignOutButton;
