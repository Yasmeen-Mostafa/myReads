import { useState } from "react";
import { getAll, search, update } from "../BooksAPI";
import BookSearch from "../components/BookSearch";
import BookShelf from "../components/BookShelf";

const BookSearchPage = () => {
  const [booksResults, setBooksResults] = useState([]);

  const SearchData = async (term) => {
    if (term) {
      const res = await search(term);
      const all = await getAll();
      const newArr = res.map((book) => {
        const test = all.find((myBook) => myBook.id === book.id);
        return test ? test : book;
      });
      setBooksResults(newArr);
    } else {
      setBooksResults([]);
    }
  };
  const onShelfEdit = async (book, shelf) => {
    await update(book, shelf);
    const rendered = [...booksResults];
    const index = rendered.findIndex((el) => el.id === book.id);
    rendered[index] = { ...book, shelf };
    setBooksResults(rendered);
  };
  return (
    <div>
      <BookSearch onSearchData={SearchData} />

      <BookShelf books={booksResults} onShelfEdit={onShelfEdit} />
    </div>
  );
};

export default BookSearchPage;
