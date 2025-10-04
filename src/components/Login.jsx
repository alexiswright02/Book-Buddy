/* TODO - add your code to create a functional React component that renders a login form */
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h2>Log In To Your Account</h2>
      <form>
        <input type="text" name="username" placeholder="Username" />
        <br></br>
        <input type="text" name="password" placeholder="Password" />
        <br></br>
        <button>Login</button>
      </form>
      <br></br>
      <Link to="/register">Need an account? Register here!</Link>
    </>
  );
}
export default Login;
