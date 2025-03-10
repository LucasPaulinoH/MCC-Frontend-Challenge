import { useSearchParams  } from "react-router-dom";

const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return { searchParams, setSearchParams };
};

export default useCustomSearchParams;
