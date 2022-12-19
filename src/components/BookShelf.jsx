import BookCard from "./BookCard";

const BookShelf = ({ books, onShelfEdit, shelf }) => {
  const booksData = books?.error ? [] : books;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksData?.map((book) => {
            return (
              <BookCard book={book} key={book.id} onShelfEdit={onShelfEdit} />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
