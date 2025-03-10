import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const DEFAULT_ICON_SIZE = 20;

export const COLUMN_FULL_CENTERED_STYLES =
  "flex flex-col items-center justify-center";

export const AppContainer = ({ children }: { children: ReactNode }) => (
  <div className={COLUMN_FULL_CENTERED_STYLES}>{children}</div>
);

export const LoggedContainer = ({
  children,
  hideSearchBar,
}: {
  hideSearchBar: boolean;
  children: ReactNode;
}) => (
  <AppContainer>
    <Navbar hideSearchBar={hideSearchBar} />
    <div className={`${COLUMN_FULL_CENTERED_STYLES} gap-12 mt-16 p-10`}>
      {children}
    </div>
  </AppContainer>
);
