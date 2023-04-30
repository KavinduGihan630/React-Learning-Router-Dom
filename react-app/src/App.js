import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Navbar from "./components/Navbar";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
