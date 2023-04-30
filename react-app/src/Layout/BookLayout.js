import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
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
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </div>
  );
}
