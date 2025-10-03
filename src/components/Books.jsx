import { useState, useEffect } from "react";
import { fetchAllBooks } from "../api/api";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      const APIResponse = await fetchAllBooks();
      console.log(APIResponse);
      setBooks(APIResponse);
    }
    getAllBooks();
  }, []);

  return (
    <>
      {/* header */}
      <h1>our catalog</h1>
      {/* search bar */}
      <div>
        <label>
          <input
            type="text"
            placeholder="Search for a book"
            onChange= {(event)=> console.log(event.target.value)}
          />
        </label>
      </div>
      {/* list of books */}
      {books.map((book) => {
        //?????? replace link with useNavigate to add books.id to the url?
        return (
          <>
            <p>
              <Link to="/id">{book.title}</Link>
            </p>
          </>
        );
      })}
    </>
  );
}

export default Books;
