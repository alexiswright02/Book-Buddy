import { Link } from "react-router-dom";

function AllCards( book ) {
  return (
    <>
      <hr></hr>
      <img src={book.coverimage} alt={"Cover photo of " + book.title} />

      <h3>
        <Link to={"/books/" + book.id}>{book.title}</Link>
      </h3>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </>
  );
}

export default AllCards;
