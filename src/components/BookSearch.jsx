import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BookSearch = ({ onSearchData }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e?.target?.value);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      onSearchData(term);
    }, 0);
    return () => clearTimeout(timeId);
  }, [term]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <NavLink className="close-search" to="/books">
          close
        </NavLink>
        <div className="search-books-input-wrapper">
          <input
            value={term}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default BookSearch;
