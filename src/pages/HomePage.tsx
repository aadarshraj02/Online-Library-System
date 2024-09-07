import { books } from "../utils/BookData";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  const greeting = (): string => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "Good Morning,";
    if (currHour < 16) return "Good Afternoon,";
    return "Good Evening,";
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Mystery",
    "Self-help",
    "True-Crime",
  ];

  const popularBooks = books.slice(0, 6);

  return (
    <div className="bg-[url('/Background-image.jpeg')] relative bg-cover bg-center w-full min-h-[82vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-50 relative p-2">
        <div>
          <h1 className="text-center text-zinc-100  text-xl sm:text-2xl md:text-3xl font-semibold">
            {greeting()} Welcome to Online Library!
          </h1>
        </div>
        <div className="mt-8">
          <h2 className="text-zinc-300 text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
            Book Categories
          </h2>
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category, index) => (
              <Link
                to={`/books/${category}`}
                key={index}
                className="bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-linear hover:scale-110 cursor-pointer flex items-center justify-center text-center text-zinc-800 font-semibold"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div className="px-4 py-2 flex justify-center">
          <div className="w-full max-w-7xl">
            <h1 className="text-2xl text-zinc-300 font-semibold px-2 text-center">
              Popular Books
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap">
              {popularBooks.map((book) => (
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
      </div>
    </div>
  );
};

export default HomePage;
