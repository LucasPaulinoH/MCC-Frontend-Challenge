import TextInput, { DEFAULT_INPUT_STYLES } from "@/components/TextInput";
import { FormEvent, useRef } from "react";
import { handleLogin } from "./functions";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { AppContainer, DEFAULT_ICON_SIZE } from "@/styles/shared";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLoginClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin(emailRef!.current!.value, passwordRef!.current!.value);
  };

  return (
    <AppContainer>
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-bold text-2xl">Hello, World!</h1>

        <form
          onSubmit={handleLoginClick}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-5">
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
    </AppContainer>
  );
};

export default Login;
