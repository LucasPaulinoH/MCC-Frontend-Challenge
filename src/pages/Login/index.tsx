import TextInput from "@/components/TextInput";
import { FormEvent, useRef } from "react";
import { handleLogin } from "./functions";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { AppContainer } from "@/styles/shared";
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
        <h1 className="font-bold text-2xl">HELLO WORLD</h1>

        <form
          onSubmit={handleLoginClick}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-5">
            <TextInput label="Email *" type="email" ref={emailRef} />
            <TextInput label="Senha *" type="password" ref={passwordRef} />
          </div>

          <Button label="Entrar" icon={<FiLogIn />} />
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
