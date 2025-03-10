import TextInput, { DEFAULT_INPUT_STYLES } from "@/components/TextInput";
import { FormEvent, useEffect, useRef } from "react";
import { handleRegister } from "./functions";
import Button from "@/components/Button";
import {
  COLUMN_FULL_CENTERED_STYLES,
  DEFAULT_ICON_SIZE,
} from "@/styles/shared";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import useCustomSearchParams from "@/hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { setSearchParams } = useCustomSearchParams();
  useEffect(() => setSearchParams({}), []);

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
    <div className={`w-screen h-screen ${COLUMN_FULL_CENTERED_STYLES}`}>
      <div
        className="cursor-pointer p-2 absolute self-start left-0 top-0"
        onClick={() => navigate("/login")}
      >
        <FiArrowLeft size={DEFAULT_ICON_SIZE} />
      </div>

      <div
        className={`w-full max-w-[400px] ${COLUMN_FULL_CENTERED_STYLES} gap-10 px-10`}
      >
        <h1 className="font-bold text-2xl">HELLO WORLD</h1>

        <form
          onSubmit={handleRegisterClick}
          className={`w-full ${COLUMN_FULL_CENTERED_STYLES} gap-5`}
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
    </div>
  );
};

export default Register;
