import { Routes, Route } from "react-router-dom";
import Book from "../pages/Book";
import BookList from "../pages/BookList";
import NewBook from "../pages/NewBook";
import BookLayout from "../Layout/BookLayout";

export default function BooksRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
