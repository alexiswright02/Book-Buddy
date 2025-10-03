/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react";
import { fetchSingleBook } from "../api/api";

function SingleBook() {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    async function getSingleBook() {
      const APIResponse = await fetchSingleBook(id);
      setBook(APIResponse);
    }
    getSingleBook();
  });

  return (
    <>
      {/*header*/}
      <h1>Single Book Component</h1>
      <p>{book.title}</p>
      {/* title */}
      {/* image */}
      {/* summary */}
    </>
  );
}

export default SingleBook;
