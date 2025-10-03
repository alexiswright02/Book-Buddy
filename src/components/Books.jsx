import { useState, useEffect } from "react";
import { fetchAllBooks } from "../api/api";
import AllCards from "./AllCards";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      const APIResponse = await fetchAllBooks();
      setBooks(APIResponse);
    }
    getAllBooks();
  }, []);

  //filtered search
  const [filter, setFilter]= useState("")
  const updatedList= filter
  ? books.filter((book)=>
    book.title.toLowerCase().includes(filter)
  )
  : books;

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
            onChange={(event) =>
            setFilter(event.target.value.toLowerCase())
            }
          />
        </label>
      </div>
      {/* list of books */}
      {updatedList.map((book) => {
        return <AllCards key={book.id} book={book}/>
      })}
    </>
  );
}

export default Books;
