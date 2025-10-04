/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../api/api";

function SingleBook() {
  //api call
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function getSingleBook() {
      const APIResponse = await fetchSingleBook(id);
      setBook(APIResponse);
    }
    getSingleBook();
  }, [id]);

  //reserve button
  function ReserveButton() {
    if (book.available) {
      return <button onClick={handleClick}>Reserve</button>;
    } else {
      return <button disabled>Not Available</button>;
    }
  }

  const handleClick = () => {
    return console.log("You have reserved " + book.title);
  };

  return (
    <>
      {/*header*/}
      <h1>Selected Book is....</h1>
      {/* image */}
      <img src={book.coverimage} alt={"Cover photo of " + book.title} />
      {/* title */}
      <h2>{book.title}</h2>
      {/* author */}
      <h3>{book.author}</h3>
      {/* description */}
      <p>{book.description}</p>
      {/* reserve button */}
      <ReserveButton />
    </>
  );
}

export default SingleBook;
