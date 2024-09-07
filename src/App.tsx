import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import BrowseBooks from "./pages/BrowseBooks";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BrowseBooks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
