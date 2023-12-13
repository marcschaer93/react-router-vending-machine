import { useParams } from "react-router-dom";

export const Snack = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  );
};
