import TextInput, { DEFAULT_INPUT_STYLES } from "@/components/TextInput";
import { FormEvent, useRef } from "react";
import { handleRegister } from "./functions";
import Button from "@/components/Button";
import BackButton from "@/components/Button/BackButton";
import { AppContainer, DEFAULT_ICON_SIZE } from "@/styles/shared";
import { FiCheck } from "react-icons/fi";

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleRegisterClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleRegister(
      usernameRef!.current!.value,
      emailRef!.current!.value,
      passwordRef!.current!.value
    );
  };

  return (
    <AppContainer>
      <div className="absolute self-start left-0 top-0">
        <BackButton />
      </div>

      <div className="flex flex-col items-center gap-10">
        <h1 className="font-bold text-2xl">HELLO WORLD</h1>

        <form
          onSubmit={handleRegisterClick}
          className="flex flex-col items-center gap-5"
        >
          <TextInput
            label="Nome de usuário *"
            type="text"
            ref={usernameRef}
            className={DEFAULT_INPUT_STYLES}
          />
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
          <TextInput
            label="Confirme a senha *"
            type="password"
            ref={confirmPasswordRef}
            className={DEFAULT_INPUT_STYLES}
          />

          <div className="mt-5 w-full">
            <Button
              label="Confirmar cadastro"
              icon={<FiCheck size={DEFAULT_ICON_SIZE} />}
            />
          </div>
        </form>
      </div>
    </AppContainer>
  );
};

export default Register;
