import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "not found ass hole" });
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Notfound</h1>
    </div>
  );
}
