import TextInput, { DEFAULT_INPUT_STYLES } from "@/components/TextInput";
import { FormEvent, useEffect, useRef } from "react";
import { handleLogin } from "./functions";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import {
  COLUMN_FULL_CENTERED_STYLES,
  DEFAULT_ICON_SIZE,
} from "@/styles/shared";
import { FiLogIn } from "react-icons/fi";
import useCustomSearchParams from "@/hooks/useSearchParams";
import useSearch from "@/hooks/useSearch";

const Login = () => {
  const navigate = useNavigate();

  const { setSearchParams } = useCustomSearchParams();
  useEffect(() => setSearchParams({}), []);

  const { setSearch } = useSearch();
  setSearch("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLoginClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin(emailRef!.current!.value, passwordRef!.current!.value);
  };

  return (
    <div className={`w-screen h-screen ${COLUMN_FULL_CENTERED_STYLES}`}>
      <div
        className={`w-full max-w-[400px] ${COLUMN_FULL_CENTERED_STYLES} gap-10 px-10`}
      >
        <h1 className="font-bold text-2xl">Hello, World!</h1>

        <form
          onSubmit={handleLoginClick}
          className={`w-full ${COLUMN_FULL_CENTERED_STYLES} gap-10`}
        >
          <div className={`w-full ${COLUMN_FULL_CENTERED_STYLES} gap-6`}>
            <TextInput
              label="Email *"
              type="email"
              ref={emailRef}
              className={DEFAULT_INPUT_STYLES}
            />
            <TextInput
              label="Senha *"
              type="password"
              ref={passwordRef}
              className={DEFAULT_INPUT_STYLES}
            />
          </div>

          <Button label="Entrar" icon={<FiLogIn size={DEFAULT_ICON_SIZE} />} />
        </form>
        <p>
          Ainda não possui uma conta?{" "}
          <span
            className="font-semibold cursor-pointer hover:border-b-1"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
