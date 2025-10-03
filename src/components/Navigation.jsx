/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/login">Log In</Link>
      </header>
    </>
  );
}

export default Navigation;
