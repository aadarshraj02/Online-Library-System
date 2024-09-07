import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { books } from "../utils/BookData";
import { Link, useParams } from "react-router-dom";

const categories = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Romance",
  "Mystery",
  "Self-help",
  "True-Crime",
];

const BrowseBooks = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const params = useParams<{ category: string }>();
  const category = params.category;
  const [searchedText, setSearchedText] = useState<string>("");

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  const searchedBooks = filteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <div className="p-4 flex flex-col items-center bg-[url('/Browsebook.jpg')] relative min-h-[82vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-center relative z-10">
          <input
            type="text"
            className="w-[80vw] sm:w-[60vw] md:[50vw] lg:w-[40vw] xl:w-[30vw] outline-none px-3 py-1 rounded-md text-lg my-3"
            placeholder="Search Books here..."
            onChange={(e) => setSearchedText(e.target.value)}
            value={searchedText}
          />
        </div>
        <h1 className="text-2xl font-semibold mb-4 text-center text-zinc-100">
          Browse Books
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          {categories.map((category, index) => (
            <Link
              to={`/books/${category}`}
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md hover:scale-110 transition-all duration-200 ease-linear cursor-pointer flex items-center justify-center text-center text-zinc-800 font-semibold mb-4 ${
                selectedCategory === category ? "bg-opacity-80" : ""
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
          {searchedBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              image={book.image}
              id={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;
