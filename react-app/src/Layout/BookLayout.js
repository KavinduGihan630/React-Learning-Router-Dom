import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  const [number, setNumber] = useState(3);
  return (
    <div className="container">
      <Outlet context={{ name: "Kavidu" }} />
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New book</Link>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}
