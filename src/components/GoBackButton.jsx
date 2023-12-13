import { useNavigate } from "react-router-dom";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/")}>Go Back!</button>;
};
