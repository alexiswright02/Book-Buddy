import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";

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
      </Routes>
    </>
  );
}

export default App;
