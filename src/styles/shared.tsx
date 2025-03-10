import { ReactNode } from "react";

export const DEFAULT_ICON_SIZE = 20;

export const AppContainer = ({ children }: { children: ReactNode }) => (
  <div className="max-w-screen h-screen flex flex-col items-center justify-center overflow-x-hidden">
    {children}
  </div>
);
