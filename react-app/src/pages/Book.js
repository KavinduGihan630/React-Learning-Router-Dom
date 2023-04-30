import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      <h1> Book {id} </h1>
      <h2>{obj.name}</h2>
    </div>
  );
}
