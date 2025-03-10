import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { DEFAULT_ICON_SIZE } from "@/styles/shared";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer p-2" onClick={() => navigate(-1)}>
      <FiArrowLeft size={DEFAULT_ICON_SIZE} />
    </div>
  );
};

export default BackButton;
