import BookCard from "../components/BookCard";
import { books } from "../utils/BookData";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "Romance",
  "Mystery",
  "Self-help",
  "True-Crime",
];

const BrowseBooks = (): JSX.Element => {
  return (
    <div className="p-4 flex justify-center bg-[url('/Browsebook.jpg')]">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-semibold mb-4 text-center text-zinc-300">
          Browse Books
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center justify-center text-center text-zinc-800 font-semibold mb-4"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
          {books.map((book) => (
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
