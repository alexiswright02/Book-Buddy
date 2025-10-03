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
      setBook(APIResponse);
    }
    getSingleBook();
  }, [id]);

  return (
    <>
      {/*header*/}
      <h1>Selected Book is....</h1>
      {/* image */}
      <img src={book.coverimage} alt={"Cover photo of " + book.title}/>
      {/* title */}
      <h2>{book.title}</h2>
      {/* author */}
      <h3>{book.author}</h3>
      {/* description */}
      <p>{book.description}</p>
    </>
  );
}

export default SingleBook;
