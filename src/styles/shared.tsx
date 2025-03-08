import { ReactNode } from "react";

export const AppContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
