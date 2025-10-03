/* TODO - add your code to create a functional React component that renders a registration form */
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <h2>Register Component</h2>
      <Link to="/login">Login</Link>
    </>
  );
}
export default Register;