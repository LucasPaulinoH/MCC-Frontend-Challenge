import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer p-2" onClick={() => navigate(-1)}>
      <FiArrowLeft width={100} height={100} />
    </div>
  );
};

export default BackButton;
