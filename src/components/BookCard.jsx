import { useState } from "react";

const BookCard = ({ book, onShelfEdit }) => {
  const [bookShelf, setBookShelf] = useState(
    book.shelf ? book.shelf : undefined
  );
  const onSelectChange = (e) => {
    setBookShelf(e.target.value);
    onShelfEdit(book, e.target.value);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks["smallThumbnail"]})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={onSelectChange} value={bookShelf} title="Move To">
              <option value="none" style={{ display: "none" }}></option>
              <option value="none" disabled>
                {book.shelf ? "Move to..." : "Add to..."}
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {book.shelf && <option value="none">None</option>}
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors[0] : ""}
        </div>
      </div>
    </li>
  );
};
export default BookCard;
