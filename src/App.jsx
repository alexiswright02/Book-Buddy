import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

function App() {
  return (
    <>
      {/* nav bar */}
      <Navigation />
      {/* two route paths */}
      <Routes>
        {/* route for home page */}
        <Route path="/" element={<Books />} />
        {/* route for single view */}
        <Route path="/books/:id" element={<SingleBook />} />
        {/* route for login page */}
        <Route path="/login" element={<Login />} />
        {/* route for create new user */}
        <Route path="/register" element={<Register />} />
        {/* route for account page */}
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
