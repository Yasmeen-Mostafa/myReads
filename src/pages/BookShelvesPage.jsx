import { useEffect, useState } from "react";
import BookShelf from "../components/BookShelf";
import { getAll, update } from "../BooksAPI";
import { NavLink } from "react-router-dom";
const BookShelvesPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      let response = await getAll();
      setBooks(response);
    };
    fetch();
  }, []);
  const onShelfEdit = async (book, shelf) => {
    await update(book, shelf);
    // setBooks(response);
    const rendered = [...books];
    const index = rendered.findIndex((el) => el.id === book.id);
    rendered[index] = { ...book, shelf };
    setBooks(rendered);
  };
  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelf
        onShelfEdit={onShelfEdit}
        books={books?.filter((book) => book.shelf === "currentlyReading")}
        shelf="Currently Reading"
      />
      <BookShelf
        onShelfEdit={onShelfEdit}
        books={books?.filter((book) => book.shelf === "wantToRead")}
        shelf="Want To Read"
      />
      <BookShelf
        onShelfEdit={onShelfEdit}
        books={books?.filter((book) => book.shelf === "read")}
        shelf="Read"
      />
      <div className="open-search">
        <NavLink to="/search">+</NavLink>
      </div>
    </div>
  );
};
export default BookShelvesPage;
