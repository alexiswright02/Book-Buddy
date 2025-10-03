/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../api/api";

function SingleBook() {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    async function getSingleBook() {
      const APIResponse = await fetchSingleBook(id);
      console.log(APIResponse);
      setBook(APIResponse.id);
    }
    getSingleBook();
  },[id]);

  return (
    <>
      {/*header*/}
      <h1>Single Book Component</h1>
      {/* title */}
      <p>{book}</p>
      {/* image */}
      {/* summary */}
    </>
  );
}

export default SingleBook;
