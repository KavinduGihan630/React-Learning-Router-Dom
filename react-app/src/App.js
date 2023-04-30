import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BooksRoutes from "./Routes/BooksRoutes";

function App() {
  return (
    <>
      <Navbar> </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books*" element={<BooksRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
