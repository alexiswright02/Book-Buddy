/* TODO - add your code to create a functional React component that renders a registration form */
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <h2>Register For An Account!</h2>
      <form>
        <input type="text" name="first name" placeholder="First Name" />
        <br></br>
        <input type="text" name="last name" placeholder="Last Name" />
        <br></br>
        <input type="text" name="username" placeholder="Username" />
        <br></br>
        <input type="text" name="password" placeholder="Password" />
        <br></br>
        <button>Register</button>
      </form>
      <br></br>
      <Link to="/login">Already have an account? Login here!</Link>
    </>
  );
}
export default Register;
