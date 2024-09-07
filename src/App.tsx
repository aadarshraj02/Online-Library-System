import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/books/:category/:id" element={<BookDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
