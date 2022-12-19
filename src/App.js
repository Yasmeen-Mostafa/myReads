import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookSearchPage from "./pages/BookSearchPage";
import BookShelvesPage from "./pages/BookShelvesPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/books" element={<BookShelvesPage />} />
        <Route path="/search" element={<BookSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
