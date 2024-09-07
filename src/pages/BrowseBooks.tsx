import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import { books } from "../utils/BookData";
import { useParams } from "react-router-dom";

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

  return (
    <div className="p-4 flex flex-col items-center bg-[url('/Browsebook.jpg')]">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-semibold mb-4 text-center text-zinc-300">
          Browse Books
        </h1>
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md hover:scale-110 transition-all duration-200 ease-linear cursor-pointer flex items-center justify-center text-center text-zinc-800 font-semibold mb-4 ${
                selectedCategory === category ? "bg-opacity-80" : ""
              }`}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
          {filteredBooks.map((book) => (
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
