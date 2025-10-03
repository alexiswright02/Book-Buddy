/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react";
import { fetchAllBooks } from "../api/api";

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
      <h3>search bar goes here</h3>
      {/* list of books */}
      {books.map((book) => {
        return (
          <>
            <p>{book.title}</p>
          </>
        );
      })}
    </>
  );
}

export default Books;
