import { FIREBASE_AUTH } from "@/utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const handleLogin = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  } catch (error) {
    alert("Erro no login: " + error);
  }
};
