import { Link } from "react-router-dom";

export default function BookList() {
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New book</Link>
      <br />
    </>
  );
}
