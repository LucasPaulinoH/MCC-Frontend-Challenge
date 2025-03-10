export type Country = {
  flags: { png: string };
  name: {
    common: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  capital: string[];
  region: string;
  languages: Record<string, string>;
};
