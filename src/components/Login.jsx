/* TODO - add your code to create a functional React component that renders a login form */
import {Link} from "react-router-dom"

function Login() {
  return (
    <>
      <h2>Log In Component</h2>
      <Link to="/register">Register</Link>
    </>
  );
}
export default Login;
